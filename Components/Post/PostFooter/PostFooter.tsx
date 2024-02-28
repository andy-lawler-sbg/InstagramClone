import {View, Text, Image, Pressable, TextInput, Modal} from 'react-native';
import styles from './PostFooter.styles';
import BoldAccountText from '../../shared/BoldAccountText/BoldAccountText';
import ProfileImage from '../../shared/ProfileImage/ProfileImage';
import {PostFooterProps} from './PostFooter.types';
import {LoggedInUser} from '../../../data/LoggedInUser';
import {
  likePost,
  save,
  likeComment,
  addComment,
} from '../../../features/posts/postsSlice';
import {useDispatch} from 'react-redux';
import {useCallback, useState} from 'react';
import Comments from '../../Comments/Comments';
import HeartReactButton from '../../shared/HeartReactButton/HeartReactButton';
import IconButton from '../../shared/IconButton/IconButton';

const PostFooter = ({
  id,
  description,
  hashtag,
  user,
  daysSince,
  comments,
  likeCount,
  isLiked,
  isSaved,
  sponsored,
}: PostFooterProps) => {
  const dispatch = useDispatch();

  const didPressLikePost = useCallback(() => dispatch(likePost(id)), []);
  const didPressSave = useCallback(() => dispatch(save(id)), []);
  const didPressAddComment = () => {
    dispatch(
      addComment({
        postId: id,
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

  const days = daysSince == 1 ? 'day' : 'days';
  const likes = likeCount == 1 ? 'like' : 'likes';

  const [comment, onChangeText] = useState<string>('');
  const [showComments, shouldShowComments] = useState<boolean>(false);

  return (
    <>
      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={showComments}
        onRequestClose={() => {
          shouldShowComments(!showComments);
        }}>
        <Comments postId={id} user={user} comments={comments} />
      </Modal>
      <View style={styles.footerActionsContainer}>
        <View style={styles.reactionContainer}>
          <HeartReactButton
            action={didPressLikePost}
            isEnabled={isLiked}
            styles={styles.reactionButton}
          />
          <IconButton
            action={() => shouldShowComments(true)}
            isEnabled
            enabledColor="black"
            enabledSource={require('../../../assets/chat-outline.png')}
            styles={[styles.reactionButton, {transform: [{scaleX: -1}]}]}
          />
          <IconButton
            action={() => shouldShowComments(true)}
            isEnabled
            enabledColor="black"
            enabledSource={require('../../../assets/send-variant-outline.png')}
            styles={[
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
        </View>
        <IconButton
          action={didPressSave}
          isEnabled={isSaved}
          enabledColor="black"
          enabledSource={require('../../../assets/bookmark.png')}
          disabledSource={require('../../../assets/bookmark-outline.png')}
          styles={styles.saveButton}
        />
      </View>
      <View style={styles.container}>
        {sponsored === false && (
          <Text style={{fontWeight: 'bold'}}>
            {likeCount.toLocaleString()} {likes}
          </Text>
        )}
        <View style={styles.postDescriptionContainer}>
          <BoldAccountText username={user.username} />
          <Text style={styles.postCommentText}>{description}</Text>
        </View>
        <Text style={styles.postHashtagText}>{hashtag}</Text>
        <Pressable onPress={() => shouldShowComments(true)}>
          <Text style={styles.viewAllCommentsButton}>
            View All {comments.length} comments
          </Text>
        </Pressable>
        {comments.length === 0 && (
          <View style={styles.addACommentContainer}>
            <ProfileImage
              style={styles.profileImage}
              avatarUri={LoggedInUser.avatarUri}
            />
            <TextInput
              value={comment}
              style={styles.addACommentText}
              onChangeText={onChangeText}
              onEndEditing={didPressAddComment}
              placeholder="Add a comment..."
              keyboardType="default"
              returnKeyType="send"
            />
          </View>
        )}
        {comments.length > 0 && (
          <View style={styles.postCommentContainer}>
            <View style={styles.postCommentInnerContainer}>
              <BoldAccountText username={comments[0].user.username} />
              <Text style={styles.postCommentText}>{comments[0].comment}</Text>
            </View>
            <HeartReactButton
              action={() =>
                dispatch(likeComment({postId: id, commentId: comments[0].id}))
              }
              isEnabled={comments[0].isLiked}
              styles={styles.likeCommentButton}
            />
          </View>
        )}
        <Text style={styles.timeSinceText}>
          {daysSince} {days} ago
        </Text>
      </View>
    </>
  );
};

export default PostFooter;
