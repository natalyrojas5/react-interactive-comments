import { createRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CommentsContext } from "../context/CommentsContext";
import { Reply } from "../interfaces/AppInterfaces";

const useCommentReply = () => {
  const currentCommentReply = createRef<HTMLTextAreaElement>();
  const {
    user,
    updateActionComment,
    action: { replyingTo, commentId },
    comments,
  } = useContext(CommentsContext);

  const createCommentReply = () => {
    const content = currentCommentReply.current?.value ?? "";

    if (content.length > 0 && currentCommentReply.current) {
      const newReply: Reply = {
        content,
        id: uuidv4(),
        createdAt: "a few seconds ago",
        user,
        replyingTo: replyingTo ?? "",
        replies: [],
        score: 0,
      };

      comments.forEach((c) => {
        c.replies.forEach((reply) => {
          reply.replies.forEach((r) => {
            if (r.id === commentId) r.replies.push(newReply);
          });
          if (reply.id === commentId) reply.replies.push(newReply);
        });
        if (c.id === commentId) c.replies.push(newReply);
      });

      currentCommentReply.current.value = "";
      updateActionComment({ commentId: null, mood: null, replyingTo: "" });
    }
  };
  return { createCommentReply, currentCommentReply };
};

export default useCommentReply;
