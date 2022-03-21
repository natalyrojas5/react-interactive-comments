import { useContext } from "react";

import { CommentsContext } from "../context/CommentsContext";
import { ScoreCommentProps } from "../interfaces/ComponentsInterfaces";
import useComment from "../hooks/useComment";

import BtnReplyComponent from "./BtnReplyComponent";
import BtnDeleteComponent from "./BtnDeleteComponent";
import BtnEditComponent from "./BtnEditComponent";

const ScoreCommentComponent = ({
  score,
  username,
  commentId,
}: ScoreCommentProps) => {
  const { user } = useContext(CommentsContext);

  const { updateCommentScore } = useComment();

  return (
    <div className="comment-score-actions h-100 order-1 order-lg-0 d-flex  align-items-start justify-content-between">
      <div className="comment-score w-100 d-flex align-items-center justify-content-between justify-content-lg-center flex-row flex-lg-column gap-lg-2 gap-3">
        <p
          role="button"
          className="comment-score-action"
          onClick={() =>
            updateCommentScore({
              action: "INCREASE",
              score,
              commentId,
            })
          }
        >
          +
        </p>
        <p className="comment-score-num">{score}</p>
        <p
          role="button"
          className="comment-score-action"
          onClick={() =>
            updateCommentScore({
              action: "DECREASE",
              score,
              commentId,
            })
          }
        >
          -
        </p>
      </div>
      {user.username === username ? (
        <div className="d-flex align-items-center gap-3 d-lg-none">
          <BtnDeleteComponent commentId={commentId} />
          <BtnEditComponent />
        </div>
      ) : (
        <div className="d-lg-none d-block">
          <BtnReplyComponent commentId={commentId} replyingTo={username} />
        </div>
      )}
    </div>
  );
};

export default ScoreCommentComponent;
