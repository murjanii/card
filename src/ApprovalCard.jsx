import React from "react";


const ApprovalCard = ({ children }) => {
  return (
    <div className="approval-card">
      <div className="content">{children}</div>
      <div className="buttons">
        <button className="approve">Accept</button>
        <button className="reject">Reject</button>
      </div>
    </div>
  );
};

export default ApprovalCard;
