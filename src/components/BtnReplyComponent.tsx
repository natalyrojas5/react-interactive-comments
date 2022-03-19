const BtnReplyComponent = () => {
  return (
    <div
      className="comment-reply d-flex align-items-center gap-3"
      role="button"
    >
      <img src="./images/icon-reply.svg" alt="Icon reply" />
      <p className="fw-bold">Reply</p>
    </div>
  );
};

export default BtnReplyComponent;
