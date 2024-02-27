import {StoryProps} from '../types/Story.types';
import {mockedUser} from './MockedUser';
import {LoggedInUser} from './LoggedInUser';

// The stories seen at the top of the app
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
  {
    id: 3,
    user: mockedUser('ferrari'),
    imageUri:
      'https://external-preview.redd.it/ferrari-2024-greater-load-in-relation-to-aerodynamics-v0-1Xa-uLi31ENRHPgEaLCKxz_eC0p0NiEUD8veGpmYXtM.jpg?auto=webp&s=7b7c2828a6b74da4a5d14db265d5bbf4d8a0b658',
    timeSince: '8h',
    isLiked: false,
  },
  {
    id: 4,
    user: mockedUser('john'),
    imageUri:
      'https://a.cdn-hotels.com/gdcs/production126/d918/fa24cf16-2857-4708-a70d-6878f66d1245.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    timeSince: '20h',
    isLiked: true,
  },
  {
    id: 5,
    user: mockedUser('adidas'),
    imageUri:
      'https://www.sportsdirect.com/images/marketing/adi-football-boots-thumb-d-240116-v2.jpg',
    timeSince: '20h',
    isLiked: true,
  },
];
