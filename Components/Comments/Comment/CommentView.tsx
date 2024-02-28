import {View, Text, Pressable, Image} from 'react-native';
import ProfileImage from '../../shared/ProfileImage/ProfileImage';
import BoldAccountText from '../../shared/BoldAccountText/BoldAccountText';
import {useDispatch} from 'react-redux';
import {CommentViewProps} from './CommentView.types';
import {likeComment} from '../../../features/posts/postsSlice';
import styles from './CommentView.styles';
import HeartReactButton from '../../shared/HeartReactButton/HeartReactButton';

const CommentView = ({comment, postId}: CommentViewProps) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.commentContainer}>
      <View style={styles.leftContainer}>
        <ProfileImage avatarUri={comment.user.avatarUri} style={{}} />
        <View style={styles.userCommentContainer}>
          <View style={styles.userTimeSinceContainer}>
            <BoldAccountText username={comment.user.username} />
            <Text style={styles.timeSinceText}>17s</Text>
          </View>
          <Text>{comment.comment}</Text>
          <Text style={styles.replyText}>Reply</Text>
        </View>
      </View>
      <View style={styles.likeCommentContainer}>
        <HeartReactButton
          action={() =>
            dispatch(likeComment({postId: postId, commentId: comment.id}))
          }
          isEnabled={comment.isLiked}
          styles={styles.likeCommentButton}
        />
        {comment.likes > 0 && <Text>{comment.likes}</Text>}
      </View>
    </View>
  );
};

export default CommentView;
