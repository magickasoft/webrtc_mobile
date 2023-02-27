import Color from 'color';

export interface BaseColor {
  Black: string;
  Black1: string;
  Black2: string;
  White: string;
  White1: string;
  Orange: string;
  Red: string;
  Blue: string;
  Blue0: string;
  Blue1: string;
  Gray: string;
  Gray0: string;
  Gray1: string;
  Gray2: string;
  Gray3: string;
  Gray4: string;
  Gray5: string;
  Gray6: string;
  Gray7: string;
  Rating: string;
  Success: string;
  Overlay: string;
  Success1: string;
  Info: string;
  Error: string;
  Purple: string;
}

export const color: BaseColor = {
  Black: '#000000',
  Black1: '#3C3C47',
  Black2: '#868A93',
  White: '#FFFFFF',
  White1: '#ffffff80',
  Orange: '#FF933B',
  Red: '#EB5757',
  Blue: '#24B0FF',
  Blue0: '#007AFF',
  Blue1: '#DFF3FF',
  Gray: '#C5CBD8',
  Gray0: '#9BA3B4',
  Gray1: '#C4C4C4',
  Gray2: '#E5E5E5',
  Gray3: '#EFEFF7',
  Gray4: '#F9F9F9',
  Gray5: '#F3FBFF',
  Gray6: '#b4bac7',
  Gray7: '#788D99',
  Rating: '#23d1ff',
  Success: '#27AE60',
  Overlay: '#77777e',
  Success1: '#00ed00',
  Info: '#00c4fe',
  Error: '#ff6a65',
  Purple: '#7d337d',
};

export interface BaseFormatterColor {
  BlackAlpha30: string;
  BlackAlpha40: string;
  BlackAlpha8A: string;
  BlackAlpha9: string;
  BlackAlphaDE: string;
  BlackAlphaE1: string;
  WhiteAlpha50: string;
}

export const formatterColor = {
  BlackAlpha30: Color(color.Black).alpha(30).toString(),
  BlackAlpha40: Color(color.Black).alpha(40).toString(),
  BlackAlpha8A: Color(color.Black).alpha(87).toString(),
  BlackAlpha9: Color(color.Black).alpha(9).toString(),
  BlackAlphaDE: Color(color.Black).alpha(99).toString(),
  BlackAlphaE1: Color(color.Black).alpha(99).toString(),
  WhiteAlpha50: Color(color.White).alpha(50).toString(),
};
