import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

const useCommentDelete = () => {
  const { action, deleteComment, comments, updateActionComment } =
    useContext(CommentsContext);

  const delete_ = () => {
    const currentComments = comments.filter((c) => {
      c.replies = c.replies.filter((c) => {
        c.replies = c.replies.filter((c) => c.id !== action.commentId);
        return c.id !== action.commentId;
      });
      return c.id !== action.commentId;
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
