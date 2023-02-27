import styled from 'styled-components/native';

import {DefaultThemeScheme} from '../../theme/theme-app';

export const MainScrollView = styled.ScrollView<{
  theme: DefaultThemeScheme;
}>`
  flex: 1;
`;

export const FlexContainer = styled.View`
  flex: 1;
`;

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{theme: DefaultThemeScheme}>`
  margin-top: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${({theme}) => theme.text.primary};
`;

export const ButtonContainer = styled.View`
  width: 80%;
  padding-top: 20px;
`;

export const TitleFilter = styled.Text<{theme: DefaultThemeScheme}>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({theme}) => theme.text.primary};
`;
