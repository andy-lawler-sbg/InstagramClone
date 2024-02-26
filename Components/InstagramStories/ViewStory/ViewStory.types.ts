import {UserProps} from '../../../types/User.types';
import {StoryProps} from '../../../types/Story.types';

export type ViewStoryProps = {
  story: StoryProps;
  shouldCloseStory: () => void;
};
