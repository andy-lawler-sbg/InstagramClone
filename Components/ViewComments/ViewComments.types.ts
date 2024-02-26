import {UserProps} from '../../types/User.types';
import {CommentProps} from '../../types/Comment.types';

export type ViewCommentsProps = {
  postId: number;
  user: UserProps;
  comments: CommentProps[];
};
