import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoriesData} from '../../data/Stories';
import {StoryProps} from '../../types/Story.types';

const storiesSlice = createSlice({
  name: 'stories',
  initialState: StoriesData,
  reducers: {
    likeStory: (state: StoryProps[], action: PayloadAction<number>) => {
      const story = state.find(story => story.id === action.payload);
      if (story) {
        story.isLiked = !story.isLiked;
      }
    },
  },
});

export const {likeStory} = storiesSlice.actions;
export default storiesSlice.reducer;
