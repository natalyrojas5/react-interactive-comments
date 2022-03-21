import { createRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { CommentsContext } from "../context/CommentsContext";
import { Comment } from "../interfaces/AppInterfaces";

const useComment = () => {
  const currentComment = createRef<HTMLTextAreaElement>();
  const { user, addComment } = useContext(CommentsContext);

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

  return { createComment, currentComment };
};

export default useComment;
