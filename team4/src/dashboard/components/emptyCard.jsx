import React from "react";
import empty from "../../assets/empty.svg";
import "./emptyCard.css";

function EmptyCard() {
  return (
    <div className="emptycard">
      <img className="empty_img" src={empty} alt="image" />
      <p className="empty_text">
        Nothing has been <br />
        uploaded yet!
      </p>
    </div>
  );
}

export default EmptyCard;
