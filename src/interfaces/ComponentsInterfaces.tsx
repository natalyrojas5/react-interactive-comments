import { LegacyRef } from "react";
import { Comment } from "./AppInterfaces";

export interface ComponentSharedProps {
  commentId: number | string;
}

export interface UserCommentProps {
  webp: string;
  username: string;
  createdAt: string;
}

export interface ScoreCommentProps extends ComponentSharedProps {
  score: number;
  username: string;
}

export interface ReplyCommentProps {
  btnText: string;
  replyTo?: string;
  action?: () => void;
  currentText?: LegacyRef<HTMLTextAreaElement>;
}

export interface CommentProps extends Comment {
  replyingTo?: string;
}

export interface BtnReplyProps extends ComponentSharedProps {
  replyingTo?: string;
}
