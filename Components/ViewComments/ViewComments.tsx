import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AccountName from '../AccountName/AccountName';
import {useDispatch} from 'react-redux';
import {likeComment, addComment} from '../../features/posts/postsSlice';
import Separator from '../Seperator/Separator';
import AccountImage from '../AccountImage/AccountImage';
import {useState} from 'react';
import styles from './ViewComments.styles';
import {ViewCommentsProps} from './ViewComments.types';
import {useHeaderHeight} from '@react-navigation/elements';
import {LoggedInUser} from '../../data/LoggedInUser';

const ViewComments = ({postId, user, comments}: ViewCommentsProps) => {
  const didPressAddComment = () => {
    dispatch(
      addComment({
        postId: postId,
        comment: {
          id: comments.length + 1,
          user: LoggedInUser,
          comment: comment,
          likes: 0,
          isLiked: false,
        },
      }),
    );
    onChangeText('');
  };

  const dispatch = useDispatch();
  const [comment, onChangeText] = useState<string>('');
  const height = useHeaderHeight();

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            margin: 20,
          }}>
          Comments
        </Text>
        <Pressable
          style={{
            position: 'absolute',
            right: 10,
            top: 20,
          }}>
          <Image
            source={require('../../assets/send-variant-outline.png')}
            style={[
              styles.reactionButton,
              {
                transform: [
                  {rotate: '340deg'},
                  {translateY: -3},
                  {translateX: 3},
                ],
              },
            ]}
          />
        </Pressable>
      </View>
      <Separator />
      <ScrollView>
        {comments.map(comment => (
          <View style={styles.commentContainer}>
            <View style={styles.leftContainer}>
              <AccountImage avatarUri={comment.user.avatarUri} style={{}} />
              <View style={styles.userCommentContainer}>
                <View style={styles.userTimeSinceContainer}>
                  <AccountName username={comment.user.username} />
                  <Text style={styles.timeSinceText}>17s</Text>
                </View>
                <Text>{comment.comment}</Text>
                <Text style={styles.replyText}>Reply</Text>
              </View>
            </View>
            <View style={styles.likeCommentContainer}>
              <Pressable
                onPress={() =>
                  dispatch(likeComment({postId: postId, commentId: comment.id}))
                }>
                <Image
                  source={
                    comment.isLiked
                      ? require('../../assets/heart.png')
                      : require('../../assets/heart-outline.png')
                  }
                  style={styles.likeCommentButton}
                />
              </Pressable>
              {comment.likes > 0 && <Text>{comment.likes}</Text>}
            </View>
          </View>
        ))}
      </ScrollView>
      <Separator />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
        keyboardVerticalOffset={height + 70}>
        <View style={styles.addCommentBox}>
          <AccountImage avatarUri={LoggedInUser.avatarUri} style={{}} />
          <TextInput
            value={comment}
            style={styles.addCommentInput}
            onChangeText={onChangeText}
            onEndEditing={didPressAddComment}
            placeholder={`Add a comment for ${user.username}`}
            keyboardType="default"
            returnKeyType="send"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ViewComments;
