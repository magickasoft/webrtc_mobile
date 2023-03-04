import styled from 'styled-components/native';

import {DefaultThemeScheme} from '../../theme/theme-app';

export const Container = styled.View<{
  theme: DefaultThemeScheme;
}>`
  flex: 1;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.View`
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  padding: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
