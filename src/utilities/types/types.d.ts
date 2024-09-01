/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  soconId: number;
  pfp: string;
  display_name: string;
  username: string;
  rewardPoints?: number;
}

export interface Comment {
  hash: string;
  text: string;
  timestamp: number;
  type: number;
  images: any[]; // Adjust if you have a specific type for images
  author: User;
}

export interface Post {
  hash: string;
  timestamp: number;
  text: string;
  isPrivate: boolean;
  type: number;
  hashtags: string[]; // Adjust if you have a specific type for hashtags
  author: User;
  isLiked: boolean;
  isSaved: boolean;
  isARepost: boolean;
  images: { url: string; caption: string; type: number }[];
  shares: number;
  reposts: number;
  likes: {
    count: number;
    author: User;
  };
  comments: {
    count: number;
    comment: Comment;
  };
}
