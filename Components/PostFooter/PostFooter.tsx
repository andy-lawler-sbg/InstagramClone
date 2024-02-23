import {View, Text, Image} from 'react-native';
import styles from './PostFooter.styles';
import AccountName from '../AccountName/AccountName';
import AccountImage from '../AccountImage/AccountImage';
import {PostFooterProps} from './PostFooter.types';
import postHeaderStyles from '../PostHeader/PostHeader.styles';
import {LoggedInUser} from '../../data/Posts';

const PostFooter = ({
  description,
  hashtag,
  user,
  daysSince,
  commentCount,
  likeCount,
}: PostFooterProps) => {
  const days = daysSince == 1 ? 'day' : 'days';
  const likes = likeCount == 1 ? 'like' : 'likes';
  return (
    <>
      <View style={styles.footerActionsContainer}>
        <View style={styles.reactionContainer}>
          <Image
            source={require('../../assets/heart-outline.png')}
            style={styles.reactionButton}
          />
          <Image
            source={require('../../assets/chat-outline.png')}
            style={[styles.reactionButton, {transform: [{scaleX: -1}]}]}
          />
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
        </View>
        <Image
          source={require('../../assets/bookmark-outline.png')}
          style={styles.saveButton}
        />
      </View>
      <View style={styles.container}>
        <Text style={postHeaderStyles.accountText}>
          {likeCount} {likes}
        </Text>
        <View style={styles.postCommentContainer}>
          <AccountName username={user.username} />
          <Text style={styles.postCommentText}>{description}</Text>
        </View>
        <Text style={styles.postHashtagText}>{hashtag}</Text>
        <Text style={styles.viewAllCommentsButton}>
          View all {commentCount} comments
        </Text>
        <View style={styles.addACommentContainer}>
          <AccountImage
            style={styles.accountImage}
            avatarUri={LoggedInUser.avatarUri}
          />
          <Text style={styles.addACommentText}>Add a comment...</Text>
        </View>
        <Text style={styles.timeSinceText}>
          {daysSince} {days} ago
        </Text>
      </View>
    </>
  );
};

export default PostFooter;
