import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  postCommentContainer: {
    flexDirection: 'row',
  },
  postCommentText: {
    paddingLeft: 5,
  },
  postHashtagText: {
    color: 'blue',
  },
  viewAllCommentsButton: {
    marginTop: 5,
    color: 'gray',
  },
  addACommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  accountImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  addACommentText: {
    color: 'gray',
    paddingLeft: 5,
  },
  timeSinceText: {
    fontSize: 10,
    color: 'gray',
    marginTop: 5,
  },
});
