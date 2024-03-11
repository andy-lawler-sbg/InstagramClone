import {FlashList} from '@shopify/flash-list';
import styles from './Stories.styles';
import Story from './Story/Story';
import {useCallback} from 'react';
import {StoryProps} from '../../types/Story.types';
import {useSelector} from 'react-redux';

const Stories = () => {
  const stories = useSelector(state => state.stories);
  const keyExtractor = useCallback((item: StoryProps) => item.imageUri, []);
  const renderItem = useCallback(({item}) => <Story {...item} />, []);

  return (
    <FlashList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={stories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={50}
    />
  );
};

export default Stories;
