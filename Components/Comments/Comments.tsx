import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {useDispatch} from 'react-redux';
import {addComment} from '../../features/posts/postsSlice';
import Separator from '../shared/Seperator/Separator';
import ProfileImage from '../shared/ProfileImage/ProfileImage';
import {useState, useCallback} from 'react';
import styles from './Comments.styles';
import {CommentsProps} from './Comments.types';

import {LoggedInUser} from '../../data/LoggedInUser';
import CommentView from './Comment/CommentView';
import IconButton from '../shared/IconButton/IconButton';

const Comments = ({postId, user, comments}: CommentsProps) => {
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

  const keyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(
    ({item}) => <CommentView comment={item} postId={postId} />,
    [],
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 60,
          height: 4,
          backgroundColor: '#d3d3d3',
          borderRadius: 14,
          alignSelf: 'center',
          marginTop: 5,
        }}
      />
      <View>
        <Text style={styles.headerText}>Comments</Text>
        <View style={styles.sendButton}>
          <IconButton
            action={() => console.log('share post comments')}
            isEnabled
            enabledColor="black"
            enabledSource={require('../../assets/send-variant-outline.png')}
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
      </View>
      <Separator />
      <FlashList
        estimatedItemSize={40}
        contentContainerStyle={{flex: 1}}
        vertical
        showsVerticalScrollIndicator={false}
        data={comments}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Separator />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
        keyboardVerticalOffset={70}>
        <View style={styles.addCommentBox}>
          <ProfileImage avatarUri={LoggedInUser.avatarUri} style={{}} />
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

export default Comments;
