import {UserProps} from '../../types/User.types';

export type PostHeaderProps = {
  user: UserProps;
  location: string;
  suggested: boolean;
  followed: boolean;
  sponsored: boolean;
};
