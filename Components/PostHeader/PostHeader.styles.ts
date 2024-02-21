import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 7.5,
  },
  imageAndDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageCircle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'red',
  },
  accountAndLocationSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 10,
    marginLeft: 5,
  },
  accountText: {
    fontWeight: 'bold',
  },
  locationText: {
    fontWeight: 'thin',
  },
  editIcon: {
    fontWeight: 'bold',
  },
});
