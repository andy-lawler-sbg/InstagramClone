import {View, FlatList} from 'react-native';
import Stories from '../../components/InstagramStories/Stories';
import Separator from '../../components/Seperator/Separator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import {PostProps} from '../../components/Post/Post.types';
import {useSelector} from 'react-redux';

const listHeaderComponent = () => (
  <>
    <Header />
    <Stories />
    <Separator />
  </>
);

const HomeScreen = () => {
  const posts = useSelector(state => state.posts);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: 'white',
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => <Post {...item} />}
        keyExtractor={(item: PostProps) => item.id}
        ListHeaderComponent={listHeaderComponent}
        style={{backgroundColor: 'white'}}
      />
    </View>
  );
};

export default HomeScreen;
