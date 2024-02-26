import {StoryProps} from '../types/Story.types';
import {mockedUser} from './MockedUser';
import {LoggedInUser} from './LoggedInUser';

export const StoriesData: StoryProps[] = [
  {
    id: 1,
    user: LoggedInUser,
    imageUri:
      'https://lfccityexplorer.co.uk/wp-content/uploads/2018/09/how-to-get-to-anfield-liverpool-fc-stadium02.jpg',
    timeSince: '1h',
    isLiked: true,
  },
  {
    id: 2,
    user: mockedUser('sam'),
    imageUri:
      'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/97/thumb_96934_default_news_size_5.jpeg',
    timeSince: '5h',
    isLiked: false,
  },
];
