import {UserProps} from '../../types/User.types';

export type PostFooterProps = {
  description: string;
  hashtag: string;
  user: UserProps;
  daysSince: number;
  commentCount: number;
};
