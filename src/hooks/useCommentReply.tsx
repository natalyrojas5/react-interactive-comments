import { createRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CommentsContext } from "../context/CommentsContext";
import { Reply } from "../interfaces/AppInterfaces";

const useCommentReply = () => {
  const currentCommentReply = createRef<HTMLTextAreaElement>();
  const { user, updateComments, updateActionComment, action, comments } =
    useContext(CommentsContext);

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
  return { createCommentReply, currentCommentReply };
};

export default useCommentReply;
