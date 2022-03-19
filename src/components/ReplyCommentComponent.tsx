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
      <textarea className="px-3 py-2" name="reply" rows={3} />
      <button className="px-3 py-2">{btnText}</button>
    </div>
  );
};

export default ReplyCommentComponent;
