import firestore from '@react-native-firebase/firestore';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  mediaDevices,
  MediaStream,
  RTCIceCandidate,
  RTCPeerConnection,
  RTCSessionDescription,
  RTCView,
} from 'react-native-webrtc';

import {AppStackParamList} from '../../AppNavigator';
import {Buttons, Container, Input, Row} from './styles';

type MainScreenProps = StackScreenProps<AppStackParamList>;

const servers = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        'stun:stun3.l.google.com:19302',
        'stun:stun4.l.google.com:19302',
      ],
    },
  ],
  iceCandidatePoolSize: 10,
};

const styles = StyleSheet.create({
  stream: {
    flex: 2,
    width: 200,
    height: 200,
  },
});

export const MainScreen: FC<MainScreenProps> = () => {
  const [channelId, setChannelId] = useState<any>(undefined);
  const [webcamStarted, setWebcamStarted] = useState<any>(false);
  const [remoteStream, setRemoteStream] = useState<any>(null);
  const [localStream, setLocalStream] = useState<any>(null);
  const pc = useRef<any>();

  const startWebcam = async () => {
    pc.current = new RTCPeerConnection(servers);
    const local = await mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    pc.current.addStream(local);
    setLocalStream(local);
    // @ts-ignore
    const remote = new MediaStream();
    setRemoteStream(remote);
    // Push tracks from local stream to peer connection
    // @ts-ignore
    local.getTracks().forEach((track: any) => {
      console.log(pc.current.getLocalStreams());
      pc.current.getLocalStreams()[0].addTrack(track);
    });
    // Pull tracks from remote stream, add to video stream
    pc.current.ontrack = (event: any) => {
      event.streams[0].getTracks().forEach((track: any) => {
        remote.addTrack(track);
      });
    };
    pc.current.onaddstream = (event: any) => {
      setRemoteStream(event.stream);
    };
    setWebcamStarted(true);
  };

  const startCall = async () => {
    const channelDoc = firestore().collection('channels').doc();
    const offerCandidates = channelDoc.collection('offerCandidates');
    const answerCandidates = channelDoc.collection('answerCandidates');
    setChannelId(channelDoc.id);
    pc.current.onicecandidate = async (event: any) => {
      if (event.candidate) {
        await offerCandidates.add(event.candidate.toJSON());
      }
    };
    //create offer
    const offerDescription = await pc.current.createOffer();
    await pc.current.setLocalDescription(offerDescription);
    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };
    await channelDoc.set({offer});
    // Listen for remote answer
    channelDoc.onSnapshot(snapshot => {
      const data = snapshot.data();
      if (!pc.current.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.current.setRemoteDescription(answerDescription);
      }
    });
    // When answered, add candidate to peer connection
    answerCandidates.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const data = change.doc.data();
          pc.current.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

  const joinCall = async () => {
    const channelDoc = firestore().collection('channels').doc(channelId);
    const offerCandidates = channelDoc.collection('offerCandidates');
    const answerCandidates = channelDoc.collection('answerCandidates');
    pc.current.onicecandidate = async (event: any) => {
      if (event.candidate) {
        await answerCandidates.add(event.candidate.toJSON());
      }
    };
    const channelDocument = await channelDoc.get();
    const channelData = channelDocument.data();
    const offerDescription = channelData?.offer;
    await pc.current.setRemoteDescription(
      new RTCSessionDescription(offerDescription),
    );
    const answerDescription = await pc.current.createAnswer();
    await pc.current.setLocalDescription(answerDescription);
    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };
    await channelDoc.update({answer});
    offerCandidates.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const data = change.doc.data();
          pc.current.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

  return (
    <Container>
      {localStream && (
        <RTCView
          // @ts-ignore
          streamURL={localStream?.toURL()}
          style={styles.stream}
          objectFit="cover"
          mirror
        />
      )}

      {remoteStream && (
        <RTCView
          // @ts-ignore
          streamURL={remoteStream?.toURL()}
          style={styles.stream}
          objectFit="cover"
          mirror
        />
      )}
      <Buttons>
        {!webcamStarted && (
          <TouchableOpacity onPress={startWebcam}>
            <Text>Start webcam</Text>
          </TouchableOpacity>
        )}
        {webcamStarted && (
          <TouchableOpacity onPress={startCall}>
            <Text>Start call</Text>
          </TouchableOpacity>
        )}
        {webcamStarted && (
          <Row>
            <TouchableOpacity onPress={joinCall}>
              <Text>Join call</Text>
            </TouchableOpacity>
            <Input
              placeholder="callId"
              value={channelId}
              onChangeText={newText => setChannelId(newText)}
            />
          </Row>
        )}
      </Buttons>
    </Container>
  );
};
