import {UserProps} from '../../types/User.types';

export type PostProps = {
  user: UserProps;
  daysSince: number;
  commentCount: number;
  location: string;
  imageUri: string;
  description: string;
  hashtag: string;
};
