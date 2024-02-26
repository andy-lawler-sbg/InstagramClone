import {UserProps} from './User.types';

export type CommentProps = {
  id: number;
  user: UserProps;
  comment: string;
  likes: number;
  isLiked: boolean;
};
