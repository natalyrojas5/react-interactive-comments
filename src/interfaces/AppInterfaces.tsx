export interface Images {
  png: string;
  webp: string;
}

export interface User {
  image: Images;
  username: string;
}
export interface CommentProps {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
}

export interface Reply extends CommentProps {
  replyingTo: string;
}

export interface Comment extends CommentProps {
  replies: Reply[];
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
