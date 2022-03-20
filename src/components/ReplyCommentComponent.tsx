import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

interface ReplyCommentProps {
  btnText: string;
  replyTo?: string;
}

const ReplyCommentComponent = ({ btnText }: ReplyCommentProps) => {
  const {
    user: {
      username,
      image: { webp },
    },
  } = useContext(CommentsContext);

  return (
    <div className="comment-box-reply shadow-sm bg-white px-3 py-4 mb-3">
      <img src={webp} alt={username} />
      <textarea
        className="px-3 py-2 scroll"
        name="reply"
        rows={3}
        placeholder="Add to comment"
      />
      <button className="p-2 px-4 ms-auto">{btnText}</button>
    </div>
  );
};

export default ReplyCommentComponent;
