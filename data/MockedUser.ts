import {UserProps} from '../types/User.types';

type MockUsers = 'john' | 'sam';

export function mockedUser(user: MockUsers): UserProps {
  switch (user) {
    case 'john':
      const john = {
        avatarUri:
          'https://i2-prod.liverpoolecho.co.uk/incoming/article10217114.ece/ALTERNATES/s615/JS70917224.jpg',
        username: 'john123',
        followed: false,
      };
      return john;
    case 'sam':
      const sam = {
        avatarUri: 'https://i.redd.it/zytqhg7brcj31.jpg',
        username: 'samjones98',
        followed: false,
      };
      return sam;
  }
}
