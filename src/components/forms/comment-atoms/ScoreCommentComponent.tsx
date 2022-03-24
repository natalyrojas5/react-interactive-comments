import { useContext } from "react";

import { CommentsContext } from "context/CommentsContext";
import { ScoreCommentProps } from "interfaces/ComponentsInterfaces";
import useComment from "hooks/useComment";

import {
  BtnDeleteComponent,
  BtnEditComponent,
  BtnReplyComponent,
} from "components/buttons";

const ScoreCommentComponent = ({
  score,
  username,
  commentId,
  initialScore,
}: ScoreCommentProps) => {
  const { user } = useContext(CommentsContext);
  const { updateCommentScore } = useComment();
  const isDisabled = score !== initialScore;

  return (
    <div className="comment-score-actions h-100 order-1 order-lg-0 d-flex  align-items-center align-items-lg-start justify-content-between">
      <div className="comment-score w-100 d-flex align-items-center justify-content-between justify-content-lg-center flex-row flex-lg-column gap-lg-2 gap-3">
        <p
          role="button"
          className={`comment-score-action ${isDisabled ? "disabled" : ""}`}
          onClick={() =>
            updateCommentScore({
              action: "INCREASE",
              score,
              commentId,
              initialScore,
            })
          }
        >
          +
        </p>
        <p className="comment-score-num">{score}</p>
        <p
          role="button"
          className={`comment-score-action ${isDisabled ? "disabled" : ""}`}
          onClick={() =>
            updateCommentScore({
              action: "DECREASE",
              score,
              commentId,
              initialScore,
            })
          }
        >
          -
        </p>
      </div>
      {user.username === username ? (
        <div className="d-flex align-items-center gap-3 d-lg-none">
          <BtnDeleteComponent commentId={commentId} />
          <BtnEditComponent commentId={commentId} />
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
