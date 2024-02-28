import {Pressable, Image} from 'react-native';
import {IconButtonProps} from './IconButton.types';

const IconButton = ({
  action,
  enabledSource,
  disabledSource,
  isEnabled = false,
  enabledColor = 'red',
  disabledColor = 'black',
  styles,
}: IconButtonProps) => (
  <Pressable onPress={action}>
    <Image
      source={isEnabled ? enabledSource : disabledSource}
      style={[styles, {tintColor: isEnabled ? enabledColor : disabledColor}]}
    />
  </Pressable>
);

export default IconButton;
