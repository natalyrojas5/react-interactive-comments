import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
interface UserCommentProps {
  webp: string;
  username: string;
  createdAt: string;
}

const UserCommentComponent = ({
  webp,
  username,
  createdAt,
}: UserCommentProps) => {
  const { user } = useContext(CommentsContext);
  return (
    <div className="comment-user d-flex align-items-center gap-3">
      <img src={webp} alt={username} />
      <p className="name fw-bold">
        {username + " "}
        {user.username === username && <span className="tag-user">you</span>}
      </p>
      <p className="create">{createdAt}</p>
    </div>
  );
};

export default UserCommentComponent;
