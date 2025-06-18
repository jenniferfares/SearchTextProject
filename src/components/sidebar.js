import React from "react";
import "./sidebar.css";
import icontwitter from "../icons/twitter-icon.webp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>
        <strong>bitsofcode.</strong> Articles on Frontend Development. All articles are written by{" "}
        <a href="https://ireaderinokun.com" target="_blank" rel="noopener noreferrer">
          Ire Aderinokun
        </a>
        , Frontend Developer and User Interface Designer.
      </p>

      <div className="stylelink twitter-follow-wrapper">
        <a
          className="twitter-follow-button"
          href="https://twitter.com/ireaderinokun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icontwitter}
            alt="Twitter"
            style={{ width: "25px", marginRight: "8px" }}
          />
          Follow @ireaderinokun
        </a>
        <span className="follower-count">19.1k Followers</span>
      </div>
    </div>
  );
};

export default Sidebar;
