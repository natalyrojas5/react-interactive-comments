import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

const useCommentDelete = () => {
  const {
    action: { commentId },
    comments,
    updateActionComment,
    deleteComment,
  } = useContext(CommentsContext);

  const delete_ = () => {
    const currentComments = comments.filter((c) => {
      c.replies = c.replies.filter((c) => {
        c.replies = c.replies.filter((c) => c.id !== commentId);
        return c.id !== commentId;
      });
      return c.id !== commentId;
    });
    deleteComment(currentComments);
    cancelDelete();
  };

  const cancelDelete = () => {
    updateActionComment({ commentId: null, mood: null });
  };

  return { delete_, cancelDelete };
};

export default useCommentDelete;
