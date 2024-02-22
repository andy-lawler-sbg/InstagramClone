import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Posts from './Posts';
import styles from './HomeScreen.styles';
import Stories from '../../components/InstagramStories/Stories';
import Separator from '../../components/Seperator/Separator';

const Header = () => (
  <SafeAreaView>
    <View style={styles.header}>
      <View style={styles.icon} />
      <View style={styles.buttonContainer}>
        <View style={styles.button} />
        <View style={styles.button} />
      </View>
    </View>
  </SafeAreaView>
);

const HomeScreen = () => (
  <View style={{flex: 1}}>
    <Header />
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stories />
      <Separator />
      <Posts />
    </ScrollView>
  </View>
);

export default HomeScreen;
