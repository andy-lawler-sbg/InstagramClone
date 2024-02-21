import {View, Text, Pressable} from 'react-native';
import styles from './PostHeader.styles';
import AccountImage from '../AccountImage/AccountImage';
import AccountName from '../AccountName/AccountName';
import {PostHeaderProps} from './PostHeader.types';

const PostHeader = ({user, location}: PostHeaderProps) => (
  <View style={styles.container}>
    <View style={styles.imageAndDetailsContainer}>
      <AccountImage avatarUri={user.avatarUri} />
      <View style={styles.accountAndLocationSection}>
        <AccountName username={user.username} />
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
    <Pressable style={styles.editIcon}>
      <Text>...</Text>
    </Pressable>
  </View>
);

export default PostHeader;
