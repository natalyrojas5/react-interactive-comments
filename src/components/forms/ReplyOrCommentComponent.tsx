import { useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import { ReplyCommentProps } from "../../interfaces/ComponentsInterfaces";

const ReplyOrCommentComponent = ({
  btnText,
  action,
  currentText,
}: ReplyCommentProps) => {
  const {
    user: {
      username,
      image: { webp },
    },
    action: ACTION,
  } = useContext(CommentsContext);

  const defaultValue = ACTION.replyingTo ?? "";
  const isComment = btnText !== "Reply";

  return (
    <div className="comment-box-reply bg-white px-3 py-4 mb-3">
      <img src={webp} alt={username} />
      <textarea
        className="px-3 py-2 scroll"
        name="reply"
        rows={3}
        placeholder={`${isComment ? "Add comment" : "Reply to comment"} `}
        ref={currentText}
        defaultValue={defaultValue}
      />
      <button className="p-2 px-4 ms-auto" onClick={action}>
        {btnText}
      </button>
    </div>
  );
};

export default ReplyOrCommentComponent;
