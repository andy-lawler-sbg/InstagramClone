import {Image} from 'react-native';
import styles from './PostImage.styles';
import {PostImageProps} from './PostImage.types';

const PostImage = ({uri}: PostImageProps) => (
  <Image
    source={{
      uri: uri,
    }}
    style={[styles.container]}
  />
);

export default PostImage;
