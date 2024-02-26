import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostProps} from '../../components/Post/Post.types';
import {PostData} from '../../data/Posts';
import {CommentProps} from '../../types/Comment.types';

const postsSlice = createSlice({
  name: 'posts',
  initialState: PostData,
  reducers: {
    likePost: (state: any[], action: PayloadAction<number>) => {
      const post = state.find(
        (post: {id: number}) => post.id === action.payload,
      );
      if (post.isLiked) {
        post.isLiked = false;
        post.likeCount--;
      } else if (post.isLiked == false) {
        post.isLiked = true;
        post.likeCount++;
      }
    },
    removeSuggestedPost: (state: any[], action: PayloadAction<number>) => {
      return state.filter((post: {id: number}) => post.id != action.payload);
    },
    save: (state: any[], action: PayloadAction<number>) => {
      const post = state.find(
        (post: {id: number}) => post.id === action.payload,
      );
      if (post) {
        post.isSaved = !post.isSaved;
      }
    },
    likeComment: (state: any[], action: PayloadAction<LikeCommentPayload>) => {
      const post = state.find(
        (post: {id: number}) => post.id === action.payload.postId,
      );
      const comment = post.comments.find(
        (comment: {id: number}) => comment.id === action.payload.commentId,
      );
      if (comment) {
        comment.isLiked = !comment.isLiked;
      }
    },
    addComment: (state: any[], action: PayloadAction<AddCommentPayload>) => {
      const post = state.find(
        (post: {id: number}) => post.id === action.payload.postId,
      );
      if (post) {
        post.comments.push(action.payload.comment);
      }
    },
  },
});

export const {likePost, removeSuggestedPost, save, likeComment, addComment} =
  postsSlice.actions;
export default postsSlice.reducer;

type LikeCommentPayload = {
  postId: number;
  commentId: number;
};

type AddCommentPayload = {
  postId: number;
  comment: CommentProps;
};
