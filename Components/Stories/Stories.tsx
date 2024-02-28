import {FlatList} from 'react-native';
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
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={stories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Stories;
