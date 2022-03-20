import { Children, useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import { Comment, Comments } from "../interfaces/AppInterfaces";
import { hasReplies } from "../utils/hasReplies";

import CommentComponent from "./CommentComponent";
import ReplyCommentComponent from "./ReplyCommentComponent";

export const CommentsComponent = () => {
  const { comments } = useContext(CommentsContext);
  if (comments.length === 0) return <>Not comments</>;
  else if (comments.length > 0)
    return (
      <div className="comments scroll">
        {Children.toArray(
          comments.map((comment: Comments, index: number) => (
            <>
              <CommentComponent {...comment} />
              {index === 0 && <ReplyCommentComponent btnText="Reply" />}
              {hasReplies(comment.replies) && (
                <div className="replies my-4">
                  {Children.toArray(
                    comment.replies.map((c: Comment, index: number) => (
                      <>
                        <CommentComponent {...c} />
                        {index === 0 && (
                          <ReplyCommentComponent btnText="Reply" />
                        )}
                      </>
                    ))
                  )}
                </div>
              )}
            </>
          ))
        )}
        <ReplyCommentComponent btnText="Send" />
      </div>
    );
  else return <>Problems</>;
};
