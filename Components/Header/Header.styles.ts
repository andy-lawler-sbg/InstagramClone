import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    maxHeight: 50,
    width: 140,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 20,
    gap: 10,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
});
