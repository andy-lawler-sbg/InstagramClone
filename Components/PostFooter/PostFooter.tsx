import {View, Text} from 'react-native';
import styles from './PostFooter.styles';
import AccountName from '../AccountName/AccountName';
import AccountImage from '../AccountImage/AccountImage';
import {PostFooterProps} from './PostFooter.types';

const PostFooter = ({
  description,
  hashtag,
  user,
  daysSince,
  commentCount,
}: PostFooterProps) => {
  const days = daysSince > 1 ? 'days' : 'day';
  return (
    <View style={styles.container}>
      <View style={styles.postCommentContainer}>
        <AccountName username={user.username} />
        <Text style={styles.postCommentText}>{description}</Text>
      </View>
      <Text style={styles.postHashtagText}>{hashtag}</Text>
      <Text style={styles.viewAllCommentsButton}>
        View all {commentCount} comments
      </Text>
      <View style={styles.addACommentContainer}>
        <AccountImage style={styles.accountImage} avatarUri={user.avatarUri} />
        <Text style={styles.addACommentText}>Add a comment...</Text>
      </View>
      <Text style={styles.timeSinceText}>
        {daysSince} {days} ago
      </Text>
    </View>
  );
};

export default PostFooter;
