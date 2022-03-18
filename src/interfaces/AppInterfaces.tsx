export interface Images {
  png: string;
  webp: string;
}

export interface User {
  image: Images;
  username: string;
}
export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
}

export interface Reply extends Comment {
  replyingTo: string;
}

export interface Comments extends Comment {
  replies: Reply[];
}

export interface AppState {
  user: User;
  comments: Comments[];
}
