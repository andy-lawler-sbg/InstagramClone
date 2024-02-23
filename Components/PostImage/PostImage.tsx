import {Image, View, Animated} from 'react-native';
import {useState, useMemo, useRef, useCallback} from 'react';
import styles from './PostImage.styles';
import {PostImageProps} from './PostImage.types';
import PagerView, {
  PagerViewOnPageSelectedEventData,
} from 'react-native-pager-view';
import type {
  Double,
  DirectEventHandler,
} from 'react-native/Libraries/Types/CodegenTypes';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const PostImage = ({uris}: PostImageProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const onPageSelected = useCallback(
    (event: DirectEventHandler<PagerViewOnPageSelectedEventData>) => {
      setSelectedPage(event.nativeEvent.position + 1);
    },
    [],
  );
  return (
    <>
      <AnimatedPagerView
        style={styles.container}
        initialPage={0}
        onPageSelected={onPageSelected}>
        {uris.map((uri, index, uris) => (
          <Image
            key={`${index + 1}`}
            source={{
              uri: uri,
            }}
          />
        ))}
      </AnimatedPagerView>
      {uris.length > 1 && (
        <View style={styles.pageDotsContainer}>
          {uris.map((uri, index, uris) => (
            <View
              style={[
                styles.pageDot,
                {
                  backgroundColor:
                    index + 1 === selectedPage ? 'blue' : '#bababa',
                },
              ]}
            />
          ))}
        </View>
      )}
    </>
  );
};

export default PostImage;
