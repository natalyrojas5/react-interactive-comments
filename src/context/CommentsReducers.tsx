import { Action, AppState, Comment } from "../interfaces/AppInterfaces";
import { user, comments } from "../data/data";

type CommentAction =
  | { type: "UPDATE_ACTION_COMMENT"; payload: Action }
  | { type: "UPDATE_STORE_COMMENT" }
  | { type: "ADD_COMMENT"; payload: Comment }
  | { type: "UPDATE_COMMENT" }
  | { type: "REPLY_COMMENT" }
  | { type: "DELETE_COMMENT"; payload: Comment[] };

export const state: AppState = {
  user,
  comments,
  action: {
    commentId: null,
    mood: null,
  },
};

export const CommentsReducers = (
  state: AppState,
  action: CommentAction
): AppState => {
  switch (action.type) {
    case "UPDATE_ACTION_COMMENT":
      return {
        ...state,
        action: {
          ...state.action,
          ...action.payload,
        },
      };
    case "UPDATE_STORE_COMMENT":
      return { ...state };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };
    case "UPDATE_COMMENT":
      return { ...state };
    case "REPLY_COMMENT":
      return { ...state };
    case "DELETE_COMMENT":
      return { ...state, comments: [...action.payload] };
    default:
      return state;
  }
};
