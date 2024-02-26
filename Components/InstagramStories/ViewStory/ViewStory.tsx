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
import PostImage from '../../PostImage/PostImage';
import AccountImage from '../../AccountImage/AccountImage';
import AccountName from '../../AccountName/AccountName';
import {useState} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ViewStoryProps} from './ViewStory.types';
import {useDispatch} from 'react-redux';
import {likeStory} from '../../../features/stories/storiesSlice';

const ViewStory = ({shouldCloseStory, story}: ViewStoryProps) => {
  const [comment, onChangeText] = useState<string>('');
  const height = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

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
          <AccountImage avatarUri={story.user.avatarUri} style={{}} />
          <View style={styles.userCommentContainer}>
            <View style={styles.userTimeSinceContainer}>
              <AccountName username={story.user.username} />
              <Text style={styles.timeSinceText}>{story.timeSince}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable>
            <Image
              source={require('../../../assets/dots-horizontal.png')}
              style={styles.button}
            />
          </Pressable>
          <Pressable onPress={shouldCloseStory}>
            <Image
              source={require('../../../assets/close.png')}
              style={styles.button}
            />
          </Pressable>
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
          <Pressable onPress={() => dispatch(likeStory(story.id))}>
            <Image
              source={
                story.isLiked
                  ? require('../../../assets/heart.png')
                  : require('../../../assets/heart-outline.png')
              }
              style={styles.button}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../assets/send-variant-outline.png')}
              style={styles.button}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ViewStory;
