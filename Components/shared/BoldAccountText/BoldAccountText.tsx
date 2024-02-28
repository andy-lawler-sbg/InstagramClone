import {Text} from 'react-native';
import {BoldAccountTextProps} from './BoldAccountText.types';

const BoldAccountText = ({username}: BoldAccountTextProps) => (
  <Text style={{fontWeight: 'bold'}}>{username}</Text>
);

export default BoldAccountText;
