import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';

import {AppStackParamList} from '../../AppNavigator';
import {Container} from './styles';

type MainScreenProps = StackScreenProps<AppStackParamList>;

export const MainScreen: FC<MainScreenProps> = () => {
  return <Container />;
};
