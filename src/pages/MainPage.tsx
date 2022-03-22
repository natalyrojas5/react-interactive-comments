import { useContext } from "react";

import { CommentsContext } from "../context/CommentsContext";
import CommentsComponent from "../components/CommentsComponent";
import ModalDelete from "../components/modals/ModalDelete";

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
