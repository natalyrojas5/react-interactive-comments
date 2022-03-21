import React, { createContext, useReducer } from "react";
import { Action, AppState, Comment } from "../interfaces/AppInterfaces";
import { CommentsReducers, state } from "./CommentsReducers";

interface CommentsContextProps extends AppState {
  updateActionComment: (action: Action) => void;
  addComment: (comment: Comment) => void;
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

  const updateActionComment = (action: Action) => {
    dispatch({ type: "UPDATE_ACTION_COMMENT", payload: action });
  };

  return (
    <CommentsContext.Provider
      value={{
        ...appState,
        addComment,
        updateActionComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
