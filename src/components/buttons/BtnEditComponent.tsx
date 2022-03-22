import { useContext } from "react";
import { CommentsContext } from "context/CommentsContext";
import { ComponentSharedProps } from "interfaces/ComponentsInterfaces";

const BtnEditComponent = ({ commentId }: ComponentSharedProps) => {
  const { updateActionComment } = useContext(CommentsContext);

  const updateComment = () => {
    updateActionComment({ commentId, mood: "EDIT" });
  };

  return (
    <div
      className="comment-edit d-flex align-items-center gap-2"
      role="button"
      onClick={updateComment}
    >
      <img src="./images/icon-edit.svg" alt="Icon reply" />
      <p className="fw-bold">Edit</p>
    </div>
  );
};

export default BtnEditComponent;
