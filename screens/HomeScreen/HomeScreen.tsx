import {View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Post from '../../components/Post/Post';
import {useSelector} from 'react-redux';
import styles from './HomeScreen.styles';
import {useCallback} from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader';

const HomeScreen = () => {
  const posts = useSelector((state: {posts: any}) => state.posts);
  const insets = useSafeAreaInsets();

  const renderItem = useCallback(({item}) => <Post {...item} />, []);
  const keyExtractor = useCallback((item: {id: number}) => item.id, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <FlatList
        containerContentStyle={styles.container}
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={HomeHeader}
      />
    </View>
  );
};

export default HomeScreen;
