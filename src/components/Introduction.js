import React from "react";
import "../styles/Introduction.css";

//images import
import placeholderImage from "../images/placeholder.png";

export default function Introduction() {
    return (
        <div className="Introduction">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img src={placeholderImage} alt="" />
            </div>
            <div className="col-9">
              <h1>What grows here in Switzerland?</h1>
              <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
            </div>
          </div>
          <div className="row introduction-rowTwo">
            <div className="col-9">
              <h1>Why buy seasonal and regional food?</h1>
              <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
            </div>
            <div className="col-3">
              <img src={placeholderImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}
