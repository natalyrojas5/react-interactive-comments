import { Children, createRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { CommentsContext } from "../context/CommentsContext";
import { Comment, Reply } from "../interfaces/AppInterfaces";
import { hasReplies } from "../utils/hasReplies";

import CommentComponent from "./CommentComponent";
import ReplyCommentComponent from "./ReplyCommentComponent";

export const CommentsComponent = () => {
  const currentComent = createRef<HTMLTextAreaElement>();
  const { comments, user, addComment } = useContext(CommentsContext);

  const createComment = () => {
    const content = currentComent.current?.value ?? "";

    if (content.length > 0 && currentComent.current) {
      const newComment: Comment = {
        id: uuidv4(),
        content,
        createdAt: "a few seconds ago",
        user,
        replies: [],
        score: 0,
      };
      currentComent.current.value = "";
      addComment(newComment);
    }
  };

  return (
    <div className="comments scroll">
      {Children.toArray(
        comments.map((comment: Comment) => (
          <>
            <CommentComponent {...comment} />
            {hasReplies(comment.replies) && (
              <div className="replies my-4">
                {Children.toArray(
                  comment.replies.map((reply: Reply) => (
                    <>
                      <CommentComponent {...reply} />
                      {/* {JSON.stringify(reply, null, 3)} */}
                      {/* {index === 0 && (
                        <ReplyCommentComponent btnText="Reply" />
                      )} */}
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
        currentText={currentComent}
        action={createComment}
      />
    </div>
  );
};
