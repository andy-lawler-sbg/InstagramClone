import {View, Image, Text} from 'react-native';
import styles from './Story.styles';
import {StoryProps} from './Story.types';

const Story = ({username, imageUri, type = 'other'}: StoryProps) => (
  <View style={styles.container}>
    <View>
      <Image
        style={[styles.image, type == 'other' && styles.colouredBorder]}
        source={{
          uri: imageUri,
        }}
      />
      {type == 'yours' && (
        <>
          <Image
            style={{
              width: 20,
              height: 20,
              tintColor: '#0c97c2',
              zIndex: 1,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            source={require('../../assets/plus-circle.png')}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              zIndex: 0,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </>
      )}
    </View>
    <Text style={[styles.username, type == 'yours' && styles.greyText]}>
      {username}
    </Text>
  </View>
);

export default Story;
