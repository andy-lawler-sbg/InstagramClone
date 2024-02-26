import {View, Text, Image, Pressable, TextInput, Modal} from 'react-native';
import styles from './PostFooter.styles';
import AccountName from '../AccountName/AccountName';
import AccountImage from '../AccountImage/AccountImage';
import {PostFooterProps} from './PostFooter.types';
import postHeaderStyles from '../PostHeader/PostHeader.styles';
import {LoggedInUser} from '../../data/LoggedInUser';
import {
  likePost,
  save,
  likeComment,
  addComment,
} from '../../features/posts/postsSlice';
import {useDispatch} from 'react-redux';
import {useCallback, useState} from 'react';
import ViewComments from '../ViewComments/ViewComments';

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
  const didPressLikeComment = useCallback(
    () => dispatch(likeComment({postId: id, commentId: comments[0].id})),
    [],
  );
  const didPressSave = useCallback(() => dispatch(save(id)), []);
  const didPressAddComment = () => {
    dispatch(
      addComment({
        postId: id,
        comment: {
          id: comments.length + 1,
          user: user,
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
        <ViewComments postId={id} user={user} comments={comments} />
      </Modal>
      <View style={styles.footerActionsContainer}>
        <View style={styles.reactionContainer}>
          <Pressable onPress={didPressLikePost}>
            <Image
              source={
                isLiked
                  ? require('../../assets/heart.png')
                  : require('../../assets/heart-outline.png')
              }
              style={styles.reactionButton}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../assets/chat-outline.png')}
              style={[styles.reactionButton, {transform: [{scaleX: -1}]}]}
            />
          </Pressable>
          <Pressable>
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
        <Pressable onPress={didPressSave}>
          <Image
            source={
              isSaved
                ? require('../../assets/bookmark.png')
                : require('../../assets/bookmark-outline.png')
            }
            style={styles.saveButton}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        {sponsored === false && (
          <Text style={postHeaderStyles.accountText}>
            {likeCount.toLocaleString()} {likes}
          </Text>
        )}
        <View style={styles.postDescriptionContainer}>
          <AccountName username={user.username} />
          <Text style={styles.postCommentText}>{description}</Text>
        </View>
        <Text style={styles.postHashtagText}>{hashtag}</Text>
        <Pressable onPress={() => shouldShowComments(true)}>
          <Text style={styles.viewAllCommentsButton}>
            View all {comments.length} comments
          </Text>
        </Pressable>
        {comments.length === 0 && (
          <View style={styles.addACommentContainer}>
            <AccountImage
              style={styles.accountImage}
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
              <AccountName username={comments[0].user.username} />
              <Text style={styles.postCommentText}>{comments[0].comment}</Text>
            </View>
            <Pressable onPress={didPressLikeComment}>
              <Image
                source={
                  comments[0].isLiked
                    ? require('../../assets/heart.png')
                    : require('../../assets/heart-outline.png')
                }
                style={styles.likeCommentButton}
              />
            </Pressable>
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
