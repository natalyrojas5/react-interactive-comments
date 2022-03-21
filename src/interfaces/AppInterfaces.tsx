export interface Images {
  png: string;
  webp: string;
}

export interface User {
  image: Images;
  username: string;
}
export interface Comment {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

export interface Reply extends Comment {
  replyingTo: string;
}

export interface Action {
  commentId: number | null | string;
  mood: null | "EDIT" | "DELETE" | "REPLY";
  replyingTo?: string;
}

export interface AppState {
  user: User;
  comments: Comment[];
  action: Action;
}
