import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    margin: 20,
  },
  reactionButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  sendButton: {
    position: 'absolute',
    right: 10,
    top: 20,
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
