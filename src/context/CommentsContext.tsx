import React, { createContext, useReducer } from "react";
import { Action, AppState, Comment } from "../interfaces/AppInterfaces";
import { CommentsReducers, state } from "./CommentsReducers";

interface CommentsContextProps extends AppState {
  updateActionComment: (action: Action) => void;
  updateStoreComment: () => void;
  addComment: (comment: Comment) => void;
  updateComment: () => void;
  deleteComment: (comment: Comment[]) => void;
}

export const CommentsContext = createContext({} as CommentsContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export const CommentsProvider = ({ children }: ProviderProps) => {
  const [appState, dispatch] = useReducer(CommentsReducers, state);

  const addComment = (comment: Comment) => {
    dispatch({ type: "ADD_COMMENT", payload: comment });
  };

  const updateComment = () => {
    dispatch({ type: "UPDATE_COMMENT" });
  };
  const updateActionComment = (action: Action) => {
    dispatch({ type: "UPDATE_ACTION_COMMENT", payload: action });
  };

  const deleteComment = (currentComments: Comment[]) => {
    dispatch({ type: "DELETE_COMMENT", payload: currentComments });
  };
  const updateStoreComment = () => {
    dispatch({ type: "UPDATE_STORE_COMMENT" });
  };

  return (
    <CommentsContext.Provider
      value={{
        ...appState,
        addComment,
        updateActionComment,
        deleteComment,
        updateComment,
        updateStoreComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
