import {PostProps} from '../types/Post.types';
import {LoggedInUser} from './LoggedInUser';
import {mockedUser} from './MockedUser';

// The posts seen on the home screen of the app
export const PostData: PostProps[] = [
  {
    id: 0,
    user: LoggedInUser,
    location: 'Liverpool, England',
    uris: [
      'https://lfccityexplorer.co.uk/wp-content/uploads/2018/09/how-to-get-to-anfield-liverpool-fc-stadium02.jpg',
    ],
    description: 'I love this city ⚽️',
    hashtag: '#LFC',
    daysSince: 1,
    likeCount: 120,
    type: 'normal',
    isLiked: true,
    isSaved: true,
    comments: [],
  },
  {
    id: 1,
    user: mockedUser('lfc'),
    location: 'Wembley Stadium, London',
    uris: [
      'https://lfccityexplorer.co.uk/wp-content/uploads/2018/09/how-to-get-to-anfield-liverpool-fc-stadium02.jpg',
      'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/97/thumb_96934_default_news_size_5.jpeg',
    ],
    description: 'What a win, what a team. ⚽️',
    hashtag: '#LFC #CarabaoCup',
    daysSince: 1,
    likeCount: 503421,
    type: 'normal',
    isLiked: true,
    isSaved: true,
    comments: [
      {
        id: 1,
        user: {
          avatarUri:
            'https://ca.slack-edge.com/E02NBG9NN84-U03KERMRU3W-a3e4e11c99cc-512',
          username: 'andylawlerdev',
          followed: false,
        },
        comment: 'Big win, up the reds!!',
        likes: 2,
        isLiked: true,
      },
      {
        id: 2,
        user: mockedUser('john'),
        comment: 'Unreal lads',
        likes: 3,
        isLiked: false,
      },
      {
        id: 3,
        user: mockedUser('sam'),
        comment: 'Van Djik best in the world',
        likes: 3,
        isLiked: false,
      },
    ],
  },
  {
    id: 2,
    user: mockedUser('zuck'),
    location: 'San Francisco, California',
    uris: [
      'https://cdn.property-forum.eu//image/articles/16791/1500/meta_london-688.jpg',
    ],
    description: 'Nice day at the office',
    hashtag: '#meta',
    daysSince: 5,
    likeCount: 10,
    type: 'suggested',
    isLiked: false,
    isSaved: false,
    comments: [
      {
        id: 1,
        user: mockedUser('john'),
        comment: 'Metaverse 🌍',
        likes: 10,
        isLiked: true,
      },
      {
        id: 1,
        user: LoggedInUser,
        comment: 'Apple Vision Pro is better 🤣',
        likes: 1,
        isLiked: false,
      },
    ],
  },
  {
    id: 3,
    user: mockedUser('elon'),
    location: 'Space',
    uris: [
      'https://cdn.zeebiz.com/sites/default/files/2023/07/25/252927-m6mmxfkahnkffjoqx7y3knvl3i.jpg',
      'https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg?v=1533926309&w=1920&h=1080',
    ],
    description: 'Successful Launch Today 🚀',
    hashtag: '#spacex #tesla',
    daysSince: 2,
    likeCount: 203421,
    type: 'normal',
    isLiked: true,
    isSaved: true,
    comments: [],
  },
  {
    id: 4,
    user: mockedUser('adidas'),
    location: 'The land of the originals.',
    uris: [
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/31715de33f6643eeb32b6a82008bd648_9366/Samba_OG_Shoes_White_IG5932_01_standard.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e0564c27f754915b743afa200c7db08_9366/adidas_Originals_Samba_Shoes_White_ID2047_01_standard.jpg',
    ],
    description: 'The new exclusive Samba range is out now. 👟',
    hashtag: '#adidas #samba',
    daysSince: 1,
    likeCount: 10,
    type: 'sponsored',
    isLiked: false,
    isSaved: false,
    comments: [
      {
        id: 1,
        user: {
          avatarUri:
            'https://ca.slack-edge.com/E02NBG9NN84-U03KERMRU3W-a3e4e11c99cc-512',
          username: 'andylawlerdev',
          followed: false,
        },
        comment: 'hello world',
        likes: 1,
        isLiked: false,
      },
    ],
  },
  {
    id: 5,
    user: mockedUser('ferrari'),
    location: 'Monza, Italy',
    uris: [
      'https://img.asmedia.epimg.net/resizer/UJTZEGbJt4AVgE0yr922M7_pvwo=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/VWNQAWNKAE6O3MUSOAEOAYKYE4.jpg',
      'https://e0.365dm.com/24/02/768x432/skysports-ferrari-f1-2024-launch_6453995.png?20240213110628',
    ],
    description: 'F1 2024 🏁',
    hashtag: '#f1',
    daysSince: 1,
    likeCount: 100200,
    type: 'normal',
    isLiked: true,
    isSaved: true,
    comments: [
      {
        id: 1,
        user: {
          avatarUri:
            'https://ca.slack-edge.com/E02NBG9NN84-U03KERMRU3W-a3e4e11c99cc-512',
          username: 'andylawlerdev',
          followed: false,
        },
        comment: '🏎️ nyooom',
        likes: 1,
        isLiked: false,
      },
    ],
  },
];
