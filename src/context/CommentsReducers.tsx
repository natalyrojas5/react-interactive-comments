import { AppState } from "interfaces/AppInterfaces";
import { user, comments } from "data";
import { CommentAction } from "types/typesApp";

export const state: AppState = {
  user,
  comments,
  action: {
    commentId: null,
    mood: null,
    replyingTo: "",
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
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };
    case "DELETE_COMMENT":
      return { ...state, comments: [...action.payload] };
    case "UPDATE_COMMENTS":
      return { ...state, comments: [...action.payload] };
    default:
      return state;
  }
};
