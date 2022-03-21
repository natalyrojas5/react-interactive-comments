import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import useComment from "../hooks/useComment";
import { CommentProps } from "../interfaces/ComponentsInterfaces";

import BtnDeleteComponent from "./BtnDeleteComponent";
import BtnEditComponent from "./BtnEditComponent";
import BtnReplyComponent from "./BtnReplyComponent";
import ScoreCommentComponent from "./ScoreCommentComponent";
import UserCommentComponent from "./UserCommentComponent";

const CommentComponent = ({
  id,
  user: {
    username,
    image: { webp },
  },
  content,
  score,
  createdAt,
}: CommentProps) => {
  const {
    user,
    action: { commentId, mood },
  } = useContext(CommentsContext);
  const isCurrentUser = user.username === username;

  const { updateCommentRef, updateComment } = useComment();
  const isEditComment = commentId === id && mood === "EDIT";

  return (
    <div className="comment shadow-sm bg-white px-3 py-4">
      <ScoreCommentComponent score={score} username={username} commentId={id} />
      <div>
        <div className="d-flex justify-content-between mb-2">
          <UserCommentComponent
            webp={webp}
            username={username}
            createdAt={createdAt}
          />
          {isCurrentUser ? (
            <div className="d-lg-flex align-items-center gap-3 d-none">
              <BtnDeleteComponent commentId={id} />
              <BtnEditComponent commentId={id} />
            </div>
          ) : (
            <div className="d-lg-block d-none">
              <BtnReplyComponent commentId={id} replyingTo={username} />
            </div>
          )}
        </div>
        <div className="comment-user">
          <textarea
            className="w-100 scroll"
            rows={3.8}
            defaultValue={content}
            placeholder="Add to comment"
            disabled={!isEditComment}
            ref={updateCommentRef}
          />
        </div>
        {isEditComment && (
          <button
            className="py-2 px-4 text-end d-block ms-auto"
            onClick={updateComment}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentComponent;
