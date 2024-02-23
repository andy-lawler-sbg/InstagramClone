import {UserProps} from '../../types/User.types';

type PostType = 'normal' | 'sponsored' | 'paid' | 'suggested';

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
  type: PostType;
};
