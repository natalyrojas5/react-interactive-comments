import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import { Comment } from "../interfaces/AppInterfaces";

import BtnDeleteComponent from "./BtnDeleteComponent";
import BtnEditComponent from "./BtnEditComponent";
import BtnReplyComponent from "./BtnReplyComponent";
import ScoreCommentComponent from "./ScoreCommentComponent";
import UserCommentComponent from "./UserCommentComponent";

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
      <ScoreCommentComponent score={score} username={username} />
      <div>
        <div className="d-flex justify-content-between mb-3">
          <UserCommentComponent
            webp={webp}
            username={username}
            createdAt={createdAt}
          />
          {isCurrentUser ? (
            <div className="d-lg-flex align-items-center gap-3 d-none">
              <BtnDeleteComponent />
              <BtnEditComponent />
            </div>
          ) : (
            <div className="d-lg-block d-none">
              <BtnReplyComponent />
            </div>
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
