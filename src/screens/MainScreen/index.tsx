import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View} from 'react-native';

import {AppStackParamList} from '../../AppNavigator';

type MainScreenProps = StackScreenProps<AppStackParamList>;

export const MainScreen: FC<MainScreenProps> = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#24AEFC'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ccc',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          shadowColor: '#116FA4',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.6,
          shadowRadius: 5.62,
          elevation: 7,
        }}
      />
    </View>
  );
};
