import { AppState } from "../interfaces/AppInterfaces";
import { user, comments } from "../data/data";

type CommentAction =
  | { type: "ADD_COMMENT" }
  | { type: "EDIT_COMMENT" }
  | { type: "DELETE_COMMENT" };

export const state: AppState = {
  user,
  comments,
};

export const CommentsReducers = (
  state: AppState,
  action: CommentAction
): AppState => {
  switch (action.type) {
    case "ADD_COMMENT":
      return { ...state };
    case "EDIT_COMMENT":
      return { ...state };
    case "DELETE_COMMENT":
      return { ...state };
    default:
      return state;
  }
};
