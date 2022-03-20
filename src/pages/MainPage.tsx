import { useContext } from "react";

import { CommentsComponent } from "../components/CommentsComponent";
import ModalDelete from "../components/ModalDelete";
import { CommentsContext } from "../context/CommentsContext";

const MainPage = () => {
  const { comments } = useContext(CommentsContext);

  return (
    <>
      {comments.length === 0 && <p>Not comments</p>}
      {comments.length > 0 && <CommentsComponent />}
      <ModalDelete />
    </>
  );
};

export default MainPage;
