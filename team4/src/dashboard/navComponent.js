import React from "react";

import "./navComponent.css";
import { GrNotification } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";

function NavComponent() {
  return (
    <div className="header">
      <div className="header_text_part">
        <h1>
          You are welcome <span className="doc_name">Dr.Chijindu</span>
        </h1>
        <p>I trust you’re ready to save lives today...</p>
      </div>
      <div className="header_icon_part">
        <GrNotification className="header_icon" />
        <RiAccountCircleFill className="header_icon" />
      </div>
    </div>
  );
}

export default NavComponent;
