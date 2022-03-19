import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import { Comment } from "../interfaces/AppInterfaces";

import BtnDeleteComponent from "./BtnDeleteComponent";
import BtnEditComponent from "./BtnEditComponent";
import BtnReplyComponent from "./BtnReplyComponent";

const CommentComponent = ({
  user: {
    username,
    image: { webp },
  },
  content,
  score,
  createdAt,
}: Comment) => {
  const { user } = useContext(CommentsContext);
  const isCurrentUser = user.username === username;

  return (
    <div className="comment shadow-sm bg-white px-3 py-4">
      <div className="comment-score d-flex align-items-center justify-content-center flex-column gap-2 ">
        <p role="button" className="comment-score-action">
          +
        </p>
        <p className="comment-score-num">{score}</p>
        <p role="button" className="comment-score-action">
          -
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-between mb-3">
          <div className="comment-user d-flex align-items-center gap-3">
            <img src={webp} alt={username} />
            <p className="name fw-bold">
              {username + " "}
              {isCurrentUser && <span className="tag-user">you</span>}
            </p>
            <p className="create">{createdAt}</p>
          </div>
          {isCurrentUser ? (
            <div className="d-flex align-items-center gap-3" role="button">
              <BtnDeleteComponent />
              <BtnEditComponent />
            </div>
          ) : (
            <BtnReplyComponent />
          )}
        </div>
        <div className="comment-user">
          <p className="text lh-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
