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
    marginHorizontal: 5,
  },
  saveButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  container: {
    margin: 10,
    spacing: 10,
    gap: 4,
  },
  postDescriptionContainer: {
    flexDirection: 'row',
  },
  postCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postCommentInnerContainer: {
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
  profileImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  addACommentText: {
    paddingLeft: 5,
  },
  timeSinceText: {
    color: 'gray',
    fontSize: 12,
  },
  likeCommentButton: {
    height: 14,
    width: 14,
    borderRadius: 7,
  },
});
