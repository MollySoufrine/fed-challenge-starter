import React from "react";
import "./avatar.css";
function AvatarImage() {
  return (
    <div className={"avatar"}>
      <img className="avatar-img" alt="" src="/images/avatar.png" />
      <p>Your Guide</p>
    </div>
  );
}

export default AvatarImage;
