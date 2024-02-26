import {View, Text, Pressable, Image} from 'react-native';
import styles from './PostHeader.styles';
import AccountImage from '../AccountImage/AccountImage';
import AccountName from '../AccountName/AccountName';
import {PostHeaderProps} from './PostHeader.types';
import Separator from '../Seperator/Separator';
import {removeSuggestedPost} from '../../features/posts/postsSlice';
import {useDispatch} from 'react-redux';

const PostHeader = ({
  id,
  user,
  location,
  suggested,
  followed,
  sponsored,
}: PostHeaderProps) => {
  const dispatch = useDispatch();

  return (
    <View>
      {suggested && (
        <>
          <View style={styles.suggestedContainer}>
            <Text>Suggested post</Text>
            <Pressable onPress={() => dispatch(removeSuggestedPost(id))}>
              <Image
                style={styles.closeIcon}
                source={require('../../assets/close.png')}
              />
            </Pressable>
          </View>
          <Separator />
        </>
      )}
      <View style={styles.horizontalContainer}>
        <View style={styles.imageAndDetailsContainer}>
          <AccountImage avatarUri={user.avatarUri} style={undefined} />
          <View style={styles.accountAndLocationSection}>
            <AccountName username={user.username} />
            <Text style={styles.locationText}>
              {sponsored ? 'Sponsored' : location}
            </Text>
          </View>
        </View>
        <View style={styles.trailingActionsContainer}>
          {followed && (
            <Pressable style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </Pressable>
          )}
          <Pressable>
            <Image
              style={styles.editIcon}
              source={require('../../assets/dots-horizontal.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PostHeader;
