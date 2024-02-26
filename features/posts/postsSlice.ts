import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostData} from '../../data/Posts';
import {CommentProps} from '../../types/Comment.types';
import {PostProps} from '../../components/Post/Post.types';

const postsSlice = createSlice({
  name: 'posts',
  initialState: PostData,
  reducers: {
    likePost: (state: PostProps[], action: PayloadAction<number>) => {
      const post = state.find(
        (post: {id: number}) => post.id === action.payload,
      );
      if (post) {
        if (post.isLiked) {
          post.isLiked = false;
          post.likeCount--;
        } else if (post.isLiked == false) {
          post.isLiked = true;
          post.likeCount++;
        }
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
      if (comment.isLiked) {
        comment.isLiked = false;
        comment.likes--;
      } else if (comment.isLiked == false) {
        comment.isLiked = true;
        comment.likes++;
      }
    },
    addComment: (state: any[], action: PayloadAction<AddCommentPayload>) => {
      if (action.payload.comment.comment) {
        const post = state.find(
          (post: {id: number}) => post.id === action.payload.postId,
        );
        if (post) {
          post.comments.push(action.payload.comment);
        }
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
