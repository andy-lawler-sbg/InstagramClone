import {View, Image} from 'react-native';
import Stories from '../Stories/Stories';
import Separator from '../shared/Seperator/Separator';
import styles from './HomeHeader.styles';
import HeartReactButton from '../shared/HeartReactButton/HeartReactButton';
import IconButton from '../shared/IconButton/IconButton';

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../../assets/logo.png')} style={styles.icon} />
    <View style={styles.buttonContainer}>
      <HeartReactButton
        styles={styles.button}
        isEnabled={false}
        action={() => console.log('Open likes')}
      />
      <IconButton
        action={() => console.log('Open messages')}
        disabledColor="black"
        disabledSource={require('../../assets/send-variant-outline.png')}
        styles={[
          styles.button,
          {
            transform: [{rotate: '340deg'}, {translateY: -3}, {translateX: 3}],
          },
        ]}
      />
    </View>
  </View>
);

const HomeHeader = () => (
  <>
    <Header />
    <Stories />
    <Separator />
  </>
);

export default HomeHeader;
