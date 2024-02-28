import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    aspectRatio: 1,
    maxHeight: 400,
    minWidth: '100%',
  },
  pageDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 7,
  },
  pageDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
});
