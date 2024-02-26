import {UserProps} from './User.types';

export type StoryProps = {
  id: number;
  user: UserProps;
  imageUri: string;
  timeSince: string;
  isLiked: boolean;
};
