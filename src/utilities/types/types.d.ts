export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  image?: string;
  likes: number;
  comments: Comment[];
  reposts: number;
  parentPost?: Post;
}
