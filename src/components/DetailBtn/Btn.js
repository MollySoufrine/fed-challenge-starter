import React from "react";
import "./btn.css";

function DetailsBtn({ onClick, data }) {
  const handleClick = () => {
    onClick(data.id);
    console.log(data.id);
  };

  return (
    <div>
      <button className="details" onClick={handleClick}>
        View Details
      </button>
    </div>
  );
}
export default DetailsBtn;
