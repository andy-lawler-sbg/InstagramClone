import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addComment} from '../../features/posts/postsSlice';
import Separator from '../Seperator/Separator';
import AccountImage from '../AccountImage/AccountImage';
import {useState} from 'react';
import styles from './ViewComments.styles';
import {ViewCommentsProps} from './ViewComments.types';
import {useHeaderHeight} from '@react-navigation/elements';
import {LoggedInUser} from '../../data/LoggedInUser';
import CommentView from './Comment/CommentView';

const ViewComments = ({postId, user, comments}: ViewCommentsProps) => {
  const didPressAddComment = () => {
    dispatch(
      addComment({
        postId: postId,
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

  const dispatch = useDispatch();
  const [comment, onChangeText] = useState<string>('');
  const height = useHeaderHeight();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Comments</Text>
        <Pressable
          style={{
            position: 'absolute',
            right: 10,
            top: 20,
          }}>
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
      <Separator />
      <FlatList
        contentContainerStyle={{
          flex: 1,
        }}
        vertical
        showsVerticalScrollIndicator={false}
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CommentView comment={item} postId={postId} />}
      />
      <Separator />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
        keyboardVerticalOffset={height + 70}>
        <View style={styles.addCommentBox}>
          <AccountImage avatarUri={LoggedInUser.avatarUri} style={{}} />
          <TextInput
            value={comment}
            style={styles.addCommentInput}
            onChangeText={onChangeText}
            onEndEditing={didPressAddComment}
            placeholder={`Add a comment for ${user.username}`}
            keyboardType="default"
            returnKeyType="send"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ViewComments;
