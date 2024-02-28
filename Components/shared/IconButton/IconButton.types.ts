import {ColorValue, StyleProp} from 'react-native';

export type IconButtonProps = {
  action: () => void;
  enabledSource?: NodeRequire;
  disabledSource?: NodeRequire;
  styles: StyleProp;
  isEnabled?: boolean;
  enabledColor?: ColorValue;
  disabledColor?: ColorValue;
};
