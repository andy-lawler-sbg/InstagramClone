import {View, FlatList} from 'react-native';
import Stories from '../../components/InstagramStories/Stories';
import Separator from '../../components/Seperator/Separator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import {PostProps} from '../../types/Post.types';
import {useSelector} from 'react-redux';
import styles from './HomeScreen.styles';
import {useCallback} from 'react';

const listHeaderComponent = () => (
  <>
    <Header />
    <Stories />
    <Separator />
  </>
);

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
          flex: 1,
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
        ListHeaderComponent={listHeaderComponent}
      />
    </View>
  );
};

export default HomeScreen;
