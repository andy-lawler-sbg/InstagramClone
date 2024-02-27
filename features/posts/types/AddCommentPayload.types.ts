import {CommentProps} from '../../../types/Comment.types';

export type AddCommentPayload = {
  postId: number;
  comment: CommentProps;
};
