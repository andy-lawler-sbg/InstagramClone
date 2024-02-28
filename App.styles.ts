import {StyleSheet} from 'react-native';

export const tabImages = {
  home: {
    filled: require('./assets/home.png'),
    outline: require('./assets/home-outline.png'),
  },
};

export default StyleSheet.create({
  tabBarIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
