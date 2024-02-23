import PostHeader from '../PostHeader/PostHeader';
import PostImage from '../PostImage/PostImage';
import PostFooter from '../PostFooter/PostFooter';
import {PostProps} from './Post.types';

const Post = ({
  user,
  location,
  uris,
  description,
  hashtag,
  daysSince = 1,
  commentCount = 0,
  likeCount = 0,
  type = 'normal',
}: PostProps) => (
  <>
    <PostHeader
      location={location}
      user={user}
      suggested={type === 'suggested'}
      followed={user.followed}
      sponsored={type === 'sponsored'}
    />
    <PostImage uris={uris} />
    <PostFooter
      description={description}
      hashtag={hashtag}
      user={user}
      daysSince={daysSince}
      commentCount={commentCount}
      likeCount={likeCount}
    />
  </>
);

export default Post;
