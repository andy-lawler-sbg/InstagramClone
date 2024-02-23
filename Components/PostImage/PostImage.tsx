import {Image, View, Animated} from 'react-native';
import styles from './PostImage.styles';
import {PostImageProps} from './PostImage.types';
import PagerView from 'react-native-pager-view';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const PostImage = ({uris}: PostImageProps) => {
  return (
    <AnimatedPagerView style={styles.container} initialPage={0}>
      {uris.map((uri, index, uris) => (
        <Image
          key={`${index + 1}`}
          source={{
            uri: uri,
          }}
        />
      ))}
    </AnimatedPagerView>
  );
};

export default PostImage;
