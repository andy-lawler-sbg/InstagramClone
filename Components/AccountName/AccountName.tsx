import {Text} from 'react-native';
import PostHeaderStyles from '../PostHeader/PostHeader.styles';
import {AccountNameProps} from './AccountName.types';

const AccountName = ({username}: AccountNameProps) => (
  <Text style={PostHeaderStyles.accountText}>{username}</Text>
);

export default AccountName;
