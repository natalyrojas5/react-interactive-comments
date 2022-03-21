import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

const useCommentDelete = () => {
  const {
    action: { commentId },
    comments,
    updateActionComment,
  } = useContext(CommentsContext);

  const delete_ = () => {
    comments.forEach((c) => {
      c.replies = c.replies.filter((c) => {
        c.replies = c.replies.filter((c) => c.id !== commentId);
        return c.id !== commentId;
      });
    });

    cancelDelete();
  };

  const cancelDelete = () => {
    updateActionComment({ commentId: null, mood: null });
  };

  return { delete_, cancelDelete };
};

export default useCommentDelete;
