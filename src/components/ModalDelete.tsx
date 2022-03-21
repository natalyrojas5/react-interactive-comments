import { useContext } from "react";
import Modal from "react-modal";
import { CommentsContext } from "../context/CommentsContext";
import customStyles from "../utils/customModalStyles";

const ModalDelete = () => {
  const { action, deleteComment, comments, updateActionComment } =
    useContext(CommentsContext);

  Modal.setAppElement("#root");

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
  return (
    <Modal
      isOpen={action.mood === "DELETE"}
      style={customStyles}
      contentLabel="Delete Modal"
    >
      <h2 className="fw-bold fs-4 mb-3">Delete comment</h2>
      <p className="lh-sm">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>

      <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between mt-3">
        <button
          className="btn btn-cancel px-3 py-2 fw-bold"
          onClick={cancelDelete}
        >
          No, Cancel
        </button>
        <button className="btn btn-delete px-3 py-2 fw-bold" onClick={delete_}>
          Yes, Delete
        </button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
