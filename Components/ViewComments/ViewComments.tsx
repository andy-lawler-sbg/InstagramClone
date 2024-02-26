import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {CommentProps} from '../../types/Comment.types';
import AccountName from '../AccountName/AccountName';
import {useDispatch} from 'react-redux';
import {likeComment} from '../../features/posts/postsSlice';

type ViewCommentsProps = {
  postId: number;
  comments: CommentProps[];
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  postCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postCommentInnerContainer: {
    flexDirection: 'row',
  },
  postCommentText: {
    paddingLeft: 5,
  },
  likeCommentButton: {
    height: 14,
    width: 14,
    borderRadius: 7,
  },
});

const ViewComments = ({postId, comments}: ViewCommentsProps) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {comments.map(comment => (
        <View style={styles.postCommentContainer}>
          <View style={styles.postCommentInnerContainer}>
            <AccountName username={comment.user.username} />
            <Text style={styles.postCommentText}>{comment.comment}</Text>
          </View>
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
        </View>
      ))}
    </View>
  );
};

export default ViewComments;
