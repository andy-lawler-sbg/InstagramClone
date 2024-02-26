import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  suggestedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  imageAndDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
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
    height: 10,
    width: 23,
    tintColor: 'grey',
  },
  closeIcon: {
    height: 10,
    width: 20,
  },
  trailingActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#d3d3d3',
    borderRadius: 6,
    marginRight: 10,
  },
  followButtonText: {
    fontWeight: '500',
  },
});
