import IconButton from '../IconButton/IconButton';
import {HeartReactButtonProps} from './HeartReactButton.types';

const HeartReactButton = ({
  action,
  isEnabled,
  styles,
}: HeartReactButtonProps) => (
  <IconButton
    action={action}
    enabledSource={require('../../../assets/heart.png')}
    disabledSource={require('../../../assets/heart-outline.png')}
    styles={styles}
    isEnabled={isEnabled}
  />
);

export default HeartReactButton;
