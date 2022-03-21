import { Children, useContext } from "react";

import { CommentsContext } from "../context/CommentsContext";
import { Comment, Reply } from "../interfaces/AppInterfaces";
import { hasReplies } from "../utils/hasReplies";
import useComment from "../hooks/useComment";

import CommentComponent from "./CommentComponent";
import ReplyCommentComponent from "./ReplyCommentComponent";
import useCommentReply from "../hooks/useCommentReply";

export const CommentsComponent = () => {
  const { createComment, currentComment } = useComment();
  const { createCommentReply, currentCommentReply } = useCommentReply();
  const { comments, action } = useContext(CommentsContext);

  return (
    <div className="comments scroll">
      {Children.toArray(
        comments.map((comment: Comment) => (
          <>
            <CommentComponent {...comment} />
            {comment.id === action.commentId && action.mood === "REPLY" && (
              <ReplyCommentComponent
                btnText="Reply"
                currentText={currentCommentReply}
                action={createCommentReply}
              />
            )}
            {hasReplies(comment.replies) && (
              <div className="replies my-4">
                {Children.toArray(
                  comment.replies.map((reply: Reply) => (
                    <>
                      <CommentComponent {...reply} />
                      {reply.id === action.commentId &&
                        action.mood === "REPLY" && (
                          <ReplyCommentComponent
                            btnText="Reply"
                            currentText={currentCommentReply}
                            action={createCommentReply}
                          />
                        )}
                      {hasReplies(reply.replies) && (
                        <div className="replies replies-2">
                          {Children.toArray(
                            reply.replies.map((reply2: Reply) => (
                              <CommentComponent {...reply2} />
                            ))
                          )}
                        </div>
                      )}
                    </>
                  ))
                )}
              </div>
            )}
          </>
        ))
      )}
      <ReplyCommentComponent
        btnText="Send"
        currentText={currentComment}
        action={createComment}
      />
    </div>
  );
};
