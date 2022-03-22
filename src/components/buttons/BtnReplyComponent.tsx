import { useContext } from "react";
import { CommentsContext } from "context/CommentsContext";
import { BtnReplyProps } from "interfaces/ComponentsInterfaces";

const BtnReplyComponent = ({ commentId, replyingTo }: BtnReplyProps) => {
  const { updateActionComment } = useContext(CommentsContext);

  const replyComment = () => {
    updateActionComment({
      commentId,
      mood: "REPLY",
      replyingTo: "@" + replyingTo,
    });
  };

  return (
    <div
      className="comment-reply d-flex align-items-center gap-2"
      role="button"
      onClick={replyComment}
    >
      <img src="./images/icon-reply.svg" alt="Icon reply" />
      <p className="fw-bold">Reply</p>
    </div>
  );
};

export default BtnReplyComponent;
