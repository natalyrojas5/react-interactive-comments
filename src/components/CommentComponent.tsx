import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
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
  const { user } = useContext(CommentsContext);
  const isCurrentUser = user.username === username;

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
              <BtnEditComponent />
            </div>
          ) : (
            <div className="d-lg-block d-none">
              <BtnReplyComponent />
            </div>
          )}
        </div>
        <div className="comment-user">
          <textarea
            className="w-100 scroll"
            rows={3.8}
            defaultValue={content}
            placeholder="Add to comment"
            disabled
          />
        </div>
        {/* <button className="py-2 px-4 text-end d-block ms-auto">Update</button> */}
      </div>
    </div>
  );
};

export default CommentComponent;
