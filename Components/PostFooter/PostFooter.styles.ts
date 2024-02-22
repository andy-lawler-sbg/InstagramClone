import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footerActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  reactionButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  saveButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  container: {
    margin: 10,
    spacing: 10,
    gap: 4,
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
    color: 'gray',
  },
  addACommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: 'gray',
  },
});
