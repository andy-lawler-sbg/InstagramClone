import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import storiesReducer from '../features/stories/storiesSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    stories: storiesReducer,
  },
});

export default store;
