import React, { useContext } from "react";
import { CommentsComponent } from "../components/CommentsComponent";
import { CommentsContext } from "../context/CommentsContext";

const MainPage = () => {
  const { comments } = useContext(CommentsContext);
  return (
    <>
      {comments.length === 0 && <p>Not comments</p>}
      {comments.length > 0 && <CommentsComponent />}
    </>
  );
};

export default MainPage;
