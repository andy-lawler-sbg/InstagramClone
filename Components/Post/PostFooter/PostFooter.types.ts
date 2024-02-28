import {UserProps} from '../../../types/User.types';
import {CommentProps} from '../../../types/Comment.types';

export type PostFooterProps = {
  id: number;
  description: string;
  hashtag: string;
  user: UserProps;
  daysSince: number;
  comments: CommentProps[];
  likeCount: number;
  isLiked: boolean;
  isSaved: boolean;
  sponsored: boolean;
};
