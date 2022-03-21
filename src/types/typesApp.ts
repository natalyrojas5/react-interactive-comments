import { Action, Comment } from "../interfaces/AppInterfaces";

export
  type CommentAction =
  | { type: "UPDATE_ACTION_COMMENT"; payload: Action }
  | { type: "ADD_COMMENT"; payload: Comment }
  | { type: "DELETE_COMMENT"; payload: Comment[] }
  | { type: "UPDATE_COMMENTS"; payload: Comment[] };


export type ActionScore = { action: 'INCREASE' | 'DECREASE', score: number, commentId: number | string };