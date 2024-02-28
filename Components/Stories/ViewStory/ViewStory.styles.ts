import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    height: 30,
    width: 30,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
    gap: 6,
  },
  timeSinceText: {
    color: 'grey',
  },
  keyboardAvoidingContainer: {
    marginBottom: 20,
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
    alignItems: 'center',
  },
  storyImage: {
    aspectRatio: 1,
    height: '80%',
    minWidth: '100%',
  },
});
