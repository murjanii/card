import React from "react";


const CommentDetail = ({ author, time, comment }) => {
  return (
    <div className="comment-detail">
      <div className="avatar">👤</div>
      <div className="content">
        <div className="author">{author}</div>
        <div className="metadata">{time}</div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
