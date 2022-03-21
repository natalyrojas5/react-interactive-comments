import React, { createContext, useReducer } from "react";
import { Action, AppState, Comment } from "../interfaces/AppInterfaces";
import { CommentsReducers, state } from "./CommentsReducers";

interface CommentsContextProps extends AppState {
  updateActionComment: (action: Action) => void;
  updateStoreComment: (comment: Comment[]) => void;
  addComment: (comment: Comment) => void;
  updateComments: (comment: Comment[]) => void;
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

  const updateComments = (currentComments: Comment[]) => {
    dispatch({ type: "UPDATE_COMMENT", payload: currentComments });
  };
  const updateActionComment = (action: Action) => {
    dispatch({ type: "UPDATE_ACTION_COMMENT", payload: action });
  };

  const deleteComment = (currentComments: Comment[]) => {
    dispatch({ type: "DELETE_COMMENT", payload: currentComments });
  };
  const updateStoreComment = (currentComments: Comment[]) => {
    dispatch({ type: "UPDATE_STORE_COMMENT", payload: currentComments });
  };

  return (
    <CommentsContext.Provider
      value={{
        ...appState,
        addComment,
        updateActionComment,
        deleteComment,
        updateComments,
        updateStoreComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
