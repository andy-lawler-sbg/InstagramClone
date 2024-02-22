import {UserProps} from '../../types/User.types';

export type PostProps = {
  user: UserProps;
  likeCount: number;
  commentCount: number;
  location: string;
  imageUri: string;
  description: string;
  hashtag: string;
  daysSince: number;
  suggested: boolean;
};
