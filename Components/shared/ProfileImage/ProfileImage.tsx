import {Image} from 'react-native';
import {ProfileImageProps} from './ProfileImage.types';

const ProfileImage = ({style, avatarUri}: ProfileImageProps) => (
  <Image
    source={{
      uri: avatarUri,
    }}
    style={[{width: 44, height: 44, borderRadius: 44 / 2}, style]}
  />
);

export default ProfileImage;
