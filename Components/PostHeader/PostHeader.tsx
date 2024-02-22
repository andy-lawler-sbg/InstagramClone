import {View, Text, Pressable} from 'react-native';
import styles from './PostHeader.styles';
import AccountImage from '../AccountImage/AccountImage';
import AccountName from '../AccountName/AccountName';
import {PostHeaderProps} from './PostHeader.types';

const PostHeader = ({user, location, suggested}: PostHeaderProps) => (
  <View style={styles.container}>
    <View style={styles.imageAndDetailsContainer}>
      <AccountImage avatarUri={user.avatarUri} />
      <View style={styles.accountAndLocationSection}>
        <AccountName username={user.username} />
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
    <View style={styles.trailingActionsContainer}>
      {suggested && (
        <Pressable style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </Pressable>
      )}
      <Pressable style={styles.editIcon}>
        <Text>...</Text>
      </Pressable>
    </View>
  </View>
);

export default PostHeader;
