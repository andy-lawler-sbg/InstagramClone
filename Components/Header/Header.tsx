import {View, Image, Pressable} from 'react-native';
import styles from './Header.styles';

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../../assets/logo.png')} style={styles.icon} />
    <View style={styles.buttonContainer}>
      <Pressable>
        <Image
          source={require('../../assets/heart-outline.png')}
          style={styles.button}
        />
      </Pressable>
      <Image
        source={require('../../assets/send-variant-outline.png')}
        style={[
          styles.button,
          {
            transform: [{rotate: '340deg'}, {translateY: -3}, {translateX: 3}],
          },
        ]}
      />
    </View>
  </View>
);

export default Header;
