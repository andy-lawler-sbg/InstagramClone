import {View, ScrollView} from 'react-native';
import styles from './Stories.styles';
import Story from '../InstagramStory/Story';
import {PostData} from '../../data/Posts';

const Stories = () => (
  <ScrollView
    style={styles.scrollView}
    showsHorizontalScrollIndicator={false}
    horizontal={true}>
    <View style={styles.container}>
      {PostData.map(data => (
        <Story
          username={data.user.username}
          imageUri={data.user.avatarUri}
          type={data.user.username === 'andylawlerdev' ? 'yours' : 'other'}
        />
      ))}
    </View>
  </ScrollView>
);

export default Stories;
