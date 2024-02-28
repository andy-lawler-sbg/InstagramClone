import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 7,
  },
  username: {
    paddingTop: 5,
    marginBottom: 5,
    fontSize: 12,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#d3d3d3',
  },
  colouredBorder: {
    borderWidth: 2,
    borderColor: '#e3a81e',
  },
  greyText: {
    color: 'grey',
  },
  plusCircle: {
    width: 20,
    height: 20,
    tintColor: '#0c97c2',
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  plusCircleBackground: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 0,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
