import React, { createContext, useReducer } from "react";
import { AppState } from "../interfaces/AppInterfaces";
import { CommentsReducers, state } from "./CommentsReducers";

interface CommentsContextProps extends AppState {
  addComment: () => void;
  editComment: () => void;
  deleteComment: () => void;
}

export const CommentsContext = createContext({} as CommentsContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export const CommentsProvider = ({ children }: ProviderProps) => {
  const [appState, dispatch] = useReducer(CommentsReducers, state);

  const addComment = () => {
    dispatch({ type: "ADD_COMMENT" });
  };

  const editComment = () => {
    dispatch({ type: "EDIT_COMMENT" });
  };

  const deleteComment = () => {
    dispatch({ type: "DELETE_COMMENT" });
  };

  return (
    <CommentsContext.Provider
      value={{ ...appState, addComment, editComment, deleteComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
