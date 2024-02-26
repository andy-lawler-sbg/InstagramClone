import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  commentContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  userCommentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 2,
  },
  userTimeSinceContainer: {
    flexDirection: 'row',
    gap: 3,
  },
  timeSinceText: {
    color: 'grey',
  },
  replyText: {
    fontWeight: '500',
    color: 'grey',
  },
  likeCommentButton: {
    height: 18,
    width: 18,
    borderRadius: 9,
    justifyContent: 'center',
  },
  likeCommentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactionButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  addCommentInput: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
  },
  addCommentBox: {
    flexDirection: 'row',
    margin: 20,
    gap: 15,
    justifyContent: 'space-between',
  },
  keyboardAvoidingContainer: {
    marginBottom: 20,
  },
});
