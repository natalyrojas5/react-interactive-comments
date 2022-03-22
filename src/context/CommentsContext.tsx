import React, { createContext, useEffect, useReducer } from "react";
import { Action, AppState, Comment } from "interfaces/AppInterfaces";
import { CommentsReducers, state } from "./CommentsReducers";

interface CommentsContextProps extends AppState {
  updateActionComment: (action: Action) => void;
  addComment: (comment: Comment) => void;
  deleteComment: (comment: Comment[]) => void;
  updateComments: (comment: Comment[]) => void;
}

export const CommentsContext = createContext({} as CommentsContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

const init = () => {
  const initialState = { ...state };
  const commentLS = JSON.parse(localStorage?.getItem("comments") ?? "[]");
  if (Array.isArray(commentLS) && commentLS.length > 0)
    initialState.comments = commentLS;

  return initialState;
};

export const CommentsProvider = ({ children }: ProviderProps) => {
  const [appState, dispatch] = useReducer(CommentsReducers, state, init);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(appState.comments));
  }, [appState]);

  const addComment = (payload: Comment) => {
    dispatch({ type: "ADD_COMMENT", payload });
  };

  const updateActionComment = (payload: Action) => {
    dispatch({ type: "UPDATE_ACTION_COMMENT", payload });
  };
  const updateComments = (payload: Comment[]) => {
    dispatch({ type: "UPDATE_COMMENTS", payload });
  };

  const deleteComment = (payload: Comment[]) => {
    dispatch({ type: "DELETE_COMMENT", payload });
  };

  return (
    <CommentsContext.Provider
      value={{
        ...appState,
        addComment,
        updateActionComment,
        deleteComment,
        updateComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
