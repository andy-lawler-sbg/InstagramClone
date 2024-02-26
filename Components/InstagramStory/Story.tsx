import {View, Image, Text} from 'react-native';
import styles from './Story.styles';
import {StoryProps} from '../../types/Story.types';
import {LoggedInUser} from '../../data/LoggedInUser';
import {useSelector} from 'react-redux';
import {likeStory} from '../../features/stories/storiesSlice';

const Story = ({user, imageUri, timeSince}: StoryProps) => {
  const stories = useSelector(state => state.stories);
  const loggedInUserStories = stories.find(
    story => story.user.username === LoggedInUser.username,
  );
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={[
            styles.image,
            (user != LoggedInUser || loggedInUserStories != 0) &&
              styles.colouredBorder,
          ]}
          source={{
            uri: user.avatarUri,
          }}
        />
        {user === LoggedInUser && loggedInUserStories === 0 && (
          <>
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: '#0c97c2',
                zIndex: 1,
                position: 'absolute',
                right: 0,
                bottom: 0,
              }}
              source={require('../../assets/plus-circle.png')}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: 10,
                zIndex: 0,
                position: 'absolute',
                right: 0,
                bottom: 0,
              }}
            />
          </>
        )}
      </View>
      <Text style={[styles.username, user === LoggedInUser && styles.greyText]}>
        {user.username}
      </Text>
    </View>
  );
};

export default Story;
