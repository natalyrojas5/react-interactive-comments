import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

export const CommentsComponent = () => {
  const { comments } = useContext(CommentsContext);
  return <div>{JSON.stringify(comments, null, 3)}</div>;
};
