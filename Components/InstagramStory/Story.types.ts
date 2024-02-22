type StoryType = 'yours' | 'other';

export type StoryProps = {
  username: string;
  imageUri: string;
  type: StoryType;
};
