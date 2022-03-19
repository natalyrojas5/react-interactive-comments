import { Children, useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import { Comment, Comments } from "../interfaces/AppInterfaces";
import { hasReplies } from "../utils/hasReplies";
import CommentComponent from "./CommentComponent";

export const CommentsComponent = () => {
  const { comments } = useContext(CommentsContext);
  if (comments.length === 0) return <>Not comments</>;
  else if (comments.length > 0)
    return (
      <div className="comments">
        {Children.toArray(
          comments.map((comment: Comments) => (
            <>
              <CommentComponent {...comment} />
              {hasReplies(comment.replies) && (
                <div className="ms-4 mt-4">
                  {Children.toArray(
                    comment.replies.map((c: Comment) => (
                      <CommentComponent {...c} />
                    ))
                  )}
                </div>
              )}
            </>
          ))
        )}
      </div>
    );
  else return <>dedede</>;
};
