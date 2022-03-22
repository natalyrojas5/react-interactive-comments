import { createRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { CommentsContext } from "context/CommentsContext";
import { Comment } from "interfaces/AppInterfaces";
import { ActionScore } from "types/typesApp";

const useComment = () => {
  const currentComment = createRef<HTMLTextAreaElement>();
  const {
    user,
    addComment,
    comments,
    updateActionComment,
    action,
    updateComments,
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

  const updateCommentScore = ({ action, score, commentId }: ActionScore) => {
    let currentScore = score;

    if (action === "INCREASE") currentScore += 1;
    else if (action === "DECREASE") currentScore -= 1;
    if (currentScore < 0) return;

    const currentComments = comments.map((c) => {
      c.replies = c.replies.map((reply) => {
        if (reply.id === commentId) reply.score = currentScore;
        reply.replies = reply.replies.map((r) => {
          if (r.id === commentId) r.score = currentScore;
          return r;
        });
        return reply;
      });
      if (c.id === commentId) c.score = currentScore;
      return c;
    });
    updateComments(currentComments);
  };

  const updateCommentRef = createRef<HTMLTextAreaElement>();
  const updateComment = () => {
    const content = updateCommentRef.current?.value ?? "";
    if (content.length > 0 && updateCommentRef.current) {
      comments.forEach((c) => {
        c.replies = c.replies.map((reply) => {
          if (reply.id === action.commentId) reply.content = content;
          reply.replies.forEach((r) => {
            if (r.id === action.commentId) r.content = content;
          });
          return reply;
        });
        if (c.id === action.commentId) c.content = content;
      });
      updateActionComment({ commentId: null, mood: null, replyingTo: "" });
    }
  };

  return {
    createComment,
    currentComment,
    updateCommentScore,
    updateCommentRef,
    updateComment,
  };
};

export default useComment;
