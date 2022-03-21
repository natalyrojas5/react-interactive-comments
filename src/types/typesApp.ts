import { Action, Comment } from "../interfaces/AppInterfaces";

export
  type CommentAction =
  | { type: "UPDATE_ACTION_COMMENT"; payload: Action }
  | { type: "UPDATE_STORE_COMMENT" }
  | { type: "ADD_COMMENT"; payload: Comment }
  | { type: "UPDATE_COMMENT"; payload: Comment[] }
  | { type: "REPLY_COMMENT" }
  | { type: "DELETE_COMMENT"; payload: Comment[] };