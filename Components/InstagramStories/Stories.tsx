import {Modal, Pressable, FlatList} from 'react-native';
import styles from './Stories.styles';
import Story from '../InstagramStory/Story';
import {useState, useCallback} from 'react';
import ViewStory from './ViewStory/ViewStory';
import {useSelector} from 'react-redux';
import {StoryProps} from '../../types/Story.types';

const Stories = () => {
  const stories = useSelector(state => state.stories);
  const [showStory, shouldShowStory] = useState<boolean>(false);
  const [story, setStory] = useState<StoryProps>(stories[0]);

  return (
    <>
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        visible={showStory}
        onRequestClose={() => {
          shouldShowStory(!showStory);
        }}>
        <ViewStory
          story={story}
          shouldCloseStory={() => shouldShowStory(false)}
        />
      </Modal>
      <FlatList
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={({item}) => (
          <Pressable
            style={{marginHorizontal: 7}}
            onPress={() => {
              setStory(item);
              shouldShowStory(true);
            }}>
            <Story {...item} />
          </Pressable>
        )}
        keyExtractor={(item: StoryProps) => item.imageUri}
      />
    </>
  );
};

export default Stories;
