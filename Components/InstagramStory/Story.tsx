import {View, Image, Text} from 'react-native';
import styles from './Story.styles';
import {StoryProps} from './Story.types';

const Story = ({username, imageUri, type = 'other'}: StoryProps) => (
  <View style={styles.container}>
    <Image
      style={[styles.image, type == 'other' && styles.colouredBorder]}
      source={{
        uri: imageUri,
      }}
    />
    <Text style={[styles.username, type == 'yours' && styles.greyText]}>
      {username}
    </Text>
  </View>
);

export default Story;
