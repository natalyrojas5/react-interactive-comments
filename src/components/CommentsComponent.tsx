import { Children, createRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { CommentsContext } from "../context/CommentsContext";
import { Comment, Reply } from "../interfaces/AppInterfaces";
import { hasReplies } from "../utils/hasReplies";

import CommentComponent from "./CommentComponent";
import ReplyCommentComponent from "./ReplyCommentComponent";

export const CommentsComponent = () => {
  const currentComment = createRef<HTMLTextAreaElement>();
  const {
    comments,
    user,
    action,
    addComment,
    updateComments,
    updateActionComment,
  } = useContext(CommentsContext);

  const createComment = () => {
    const content = currentComment.current?.value ?? "";

    if (content.length > 0 && currentComment.current) {
      const newComment: Comment = {
        content,
        id: uuidv4(),
        createdAt: "a few seconds ago",
        user,
        replies: [],
        score: 0,
      };
      currentComment.current.value = "";
      addComment(newComment);
    }
  };

  const currentCommentReply = createRef<HTMLTextAreaElement>();
  const createCommentReply = () => {
    const content = currentCommentReply.current?.value ?? "";

    if (content.length > 0 && currentCommentReply.current) {
      const newReply: Reply = {
        content,
        id: uuidv4(),
        createdAt: "a few seconds ago",
        user,
        replyingTo: action.replyingTo ?? "",
        replies: [],
        score: 0,
      };

      const currentComments = comments.map((c) => {
        c.replies = c.replies.map((reply) => {
          debugger;
          if (reply.id === action.commentId) reply.replies.push(newReply);
          reply.replies.map((r) => {
            if (r.id === action.commentId) r.replies.push(newReply);
            return r;
          });
          return reply;
        });
        if (c.id === action.commentId) c.replies.push(newReply);
        return c;
      });
      currentCommentReply.current.value = "";
      updateComments(currentComments);
      updateActionComment({ commentId: null, mood: null, replyingTo: "" });
    }
  };

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
