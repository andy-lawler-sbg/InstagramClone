import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import styles from './ViewStory.styles';
import ProfileImage from '../../shared/ProfileImage/ProfileImage';
import BoldAccountText from '../../shared/BoldAccountText/BoldAccountText';
import {useState, useEffect} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ViewStoryProps} from './ViewStory.types';
import {useDispatch} from 'react-redux';
import {likeStory} from '../../../features/stories/storiesSlice';
import IconButton from '../../shared/IconButton/IconButton';
import HeartReactButton from '../../shared/HeartReactButton/HeartReactButton';

const ViewStory = ({shouldCloseStory, story}: ViewStoryProps) => {
  const [comment, onChangeText] = useState<string>('');
  const height = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => shouldCloseStory(), 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: 'white',
      }}>
      <View style={styles.commentContainer}>
        <View style={styles.leftContainer}>
          <ProfileImage avatarUri={story.user.avatarUri} style={{}} />
          <View style={styles.userCommentContainer}>
            <View style={styles.userTimeSinceContainer}>
              <BoldAccountText username={story.user.username} />
              <Text style={styles.timeSinceText}>{story.timeSince}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            action={() => console.log('View edit story')}
            styles={styles.button}
            disabledSource={require('../../../assets/dots-horizontal.png')}
          />
          <IconButton
            action={shouldCloseStory}
            styles={styles.button}
            disabledSource={require('../../../assets/close.png')}
          />
        </View>
      </View>
      <Image
        style={styles.storyImage}
        source={{
          uri: story.imageUri,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
        keyboardVerticalOffset={height + 70}>
        <View style={styles.addCommentBox}>
          <TextInput
            value={comment}
            style={styles.addCommentInput}
            onChangeText={onChangeText}
            placeholder={`Send message`}
            keyboardType="default"
            returnKeyType="send"
          />
          <HeartReactButton
            action={() => dispatch(likeStory(story.id))}
            isEnabled={story.isLiked}
            styles={styles.button}
          />
          <IconButton
            action={shouldCloseStory}
            styles={styles.button}
            disabledSource={require('../../../assets/send-variant-outline.png')}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ViewStory;
