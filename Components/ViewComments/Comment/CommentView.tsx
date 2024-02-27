import {View, Text, Pressable, Image} from 'react-native';
import AccountImage from '../../AccountImage/AccountImage';
import AccountName from '../../AccountName/AccountName';
import {useDispatch} from 'react-redux';
import {CommentViewProps} from './CommentView.types';
import {likeComment} from '../../../features/posts/postsSlice';
import styles from './CommentView.styles';

const CommentView = ({comment, postId}: CommentViewProps) => {
  const dispatch = useDispatch();
  return (
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
                ? require('../../../assets/heart.png')
                : require('../../../assets/heart-outline.png')
            }
            style={styles.likeCommentButton}
          />
        </Pressable>
        {comment.likes > 0 && <Text>{comment.likes}</Text>}
      </View>
    </View>
  );
};

export default CommentView;
