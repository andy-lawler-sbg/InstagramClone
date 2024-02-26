import PostHeader from '../PostHeader/PostHeader';
import PostImage from '../PostImage/PostImage';
import PostFooter from '../PostFooter/PostFooter';
import {PostProps} from './Post.types';

const Post = ({
  id,
  user,
  location,
  uris,
  description,
  hashtag,
  daysSince = 1,
  comments,
  likeCount = 0,
  type = 'normal',
  isLiked,
  isSaved,
}: PostProps) => (
  <>
    <PostHeader
      id={id}
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
      comments={comments}
      likeCount={likeCount}
      id={id}
      isLiked={isLiked}
      isSaved={isSaved}
    />
  </>
);

export default Post;
