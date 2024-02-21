import PostHeader from '../PostHeader/PostHeader';
import PostImage from '../PostImage/PostImage';
import PostFooter from '../PostFooter/PostFooter';
import {PostProps} from './Post.types';

const Post = ({
  user,
  location,
  imageUri,
  description,
  hashtag,
  daysSince,
  commentCount,
}: PostProps) => (
  <>
    <PostHeader location={location} user={user} />
    <PostImage uri={imageUri} />
    <PostFooter
      description={description}
      hashtag={hashtag}
      user={user}
      daysSince={daysSince}
      commentCount={commentCount}
    />
  </>
);

export default Post;
