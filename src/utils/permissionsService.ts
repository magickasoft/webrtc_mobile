import {Linking, Platform} from 'react-native';
import RNPermissions, {PERMISSIONS, RESULTS} from 'react-native-permissions';

export const APP_TRACKING_TRANSPARENCY = 'appTrackingTransparency';
export const LOCATION = 'location';
export const CAMERA = 'camera';
export const PHOTO = 'photo';

export const permissions = {
  [APP_TRACKING_TRANSPARENCY]: PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
  [LOCATION]: Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  }),
  [CAMERA]: Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  }),
  [PHOTO]: Platform.select({
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  }),
};

export const openSettingsPermission = Platform.select({
  android: Linking.openSettings,
  ios: RNPermissions.openSettings,
});

export const PERMISSIONS_BUTTONS = () => {
  return [
    {
      text: 'goToSettings',
      onPress: openSettingsPermission,
    },
    {
      text: 'cancel',
      style: 'cancel',
      onPress: () => {},
    },
  ];
};

export const checkPermission = async (
  permission: any,
  success = () => {},
  fail = () => {},
) => {
  try {
    const status = await RNPermissions.check(permission);
    if (status === RESULTS.DENIED) {
      const requestStatus = await RNPermissions.request(permission);
      if (
        requestStatus === RESULTS.GRANTED ||
        requestStatus === RESULTS.LIMITED
      ) {
        success();
      }
    }
    if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
      success();
    }
    if (status === RESULTS.BLOCKED) {
      fail();
    }
  } catch (e) {
    console.log('Error:', e);
  }
};
