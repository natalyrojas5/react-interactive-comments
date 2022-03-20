import { Children, createRef, useContext, useRef } from "react";
import moment from "moment";
import { CommentsContext } from "../context/CommentsContext";
import { Comment, Reply } from "../interfaces/AppInterfaces";
import { hasReplies } from "../utils/hasReplies";

import CommentComponent from "./CommentComponent";
import ReplyCommentComponent from "./ReplyCommentComponent";

export const CommentsComponent = () => {
  const currentComent = createRef<HTMLTextAreaElement>();

  const { comments, user, addComment } = useContext(CommentsContext);

  const createComment = () => {
    const lastCommentId = comments.at(-1)?.id ?? 0;
    const content = currentComent.current?.value ?? "";

    if (content.length > 0 && currentComent.current) {
      const newComment: Comment = {
        id: lastCommentId + 1,
        content,
        createdAt: moment(new Date(), "YYYYMMDD").fromNow(),
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
        comments.map((comment: Comment, index: number) => (
          <>
            <CommentComponent {...comment} />
            {hasReplies(comment.replies) && (
              <div className="replies my-4">
                {Children.toArray(
                  comment.replies.map((reply: Reply, index: number) => (
                    <>
                      {/* <CommentComponent {...c} /> */}
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
