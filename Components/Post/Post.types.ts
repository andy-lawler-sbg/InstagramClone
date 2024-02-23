import {UserProps} from '../../types/User.types';

export type PostProps = {
  id: number;
  user: UserProps;
  likeCount: number;
  commentCount: number;
  location: string;
  uris: string[];
  description: string;
  hashtag: string;
  daysSince: number;
  suggested: boolean;
};
