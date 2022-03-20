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
  replies: Reply[];
}

export interface Reply extends Comment {
  replyingTo: string;
}

export interface Action {
  commentId: number | null;
  mood: null | "EDIT" | "DELETE" | "REPLY";
}

export interface AppState {
  user: User;
  comments: Comment[];
  action: Action;
}
