import {Image} from 'react-native';
import PostHeaderStyles from '../PostHeader/PostHeader.styles';
import {AccountImageProps} from './AccountImages.types';

const AccountImage = ({style, avatarUri}: AccountImageProps) => (
  <Image
    source={{
      uri: avatarUri,
    }}
    style={[PostHeaderStyles.profileImageCircle, style]}
  />
);

export default AccountImage;
