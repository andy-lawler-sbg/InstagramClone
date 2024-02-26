import {UserProps} from '../../types/User.types';
import {CommentProps} from '../../types/Comment.types';

type PostType = 'normal' | 'sponsored' | 'paid' | 'suggested';

export type PostProps = {
  id: number;
  user: UserProps;
  isLiked: boolean;
  isSaved: boolean;
  likeCount: number;
  location: string;
  uris: string[];
  description: string;
  hashtag: string;
  daysSince: number;
  type: PostType;
  comments: CommentProps[];
};
