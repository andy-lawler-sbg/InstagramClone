import {View, Text, Modal, Pressable} from 'react-native';
import styles from './Story.styles';
import {StoryProps} from '../../../types/Story.types';
import {LoggedInUser} from '../../../data/LoggedInUser';
import {useSelector} from 'react-redux';
import ViewStory from '../ViewStory/ViewStory';
import {useState, useCallback} from 'react';
import ProfileImage from '../../shared/ProfileImage/ProfileImage';

const Story = ({id, user, imageUri, timeSince, isLiked}: StoryProps) => {
  const stories = useSelector(state => state.stories);
  const loggedInUserStories = stories.find(
    story => story.user.username === LoggedInUser.username,
  );

  const [showStory, shouldShowStory] = useState<boolean>(false);

  const shouldCloseStory = useCallback(() => shouldShowStory(false), []);

  return (
    <>
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        visible={showStory}
        onRequestClose={shouldCloseStory}>
        <ViewStory
          story={{
            id: id,
            user: user,
            imageUri: imageUri,
            timeSince: timeSince,
            isLiked: isLiked,
          }}
          shouldCloseStory={shouldCloseStory}
        />
      </Modal>
      <Pressable onPress={() => shouldShowStory(true)} style={styles.button}>
        <View style={styles.container}>
          <ProfileImage
            style={[
              styles.image,
              (user != LoggedInUser || loggedInUserStories != 0) &&
                styles.colouredBorder,
            ]}
            avatarUri={user.avatarUri}
          />
          <Text
            style={[styles.username, user === LoggedInUser && styles.greyText]}>
            {user.username}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default Story;
