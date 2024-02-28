import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
});
