import { useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import { ComponentSharedProps } from "../../interfaces/ComponentsInterfaces";

const BtnDeleteComponent = ({ commentId }: ComponentSharedProps) => {
  const { updateActionComment } = useContext(CommentsContext);

  const showDeleteModal = () => {
    updateActionComment({ commentId, mood: "DELETE" });
  };

  return (
    <div
      className="comment-delete d-flex align-items-center gap-2"
      role="button"
      onClick={showDeleteModal}
    >
      <img src="./images/icon-delete.svg" alt="Icon reply" />
      <p className="fw-bold">Delete</p>
    </div>
  );
};

export default BtnDeleteComponent;
