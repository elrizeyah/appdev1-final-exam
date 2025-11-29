// src/components/GitHubCorner.jsx
import React from "react";

const GitHubCorner = ({ url }) => {
  return (
    <a
      href={url}
      className="github-corner"
      aria-label="View source on GitHub"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style={{
          fill: "#151513",
          color: "#fff",
          position: "absolute",
          top: 0,
          border: 0,
          right: 0,
        }}
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128 109c-15-8-27-20-32-35-1-3 0-5 3-5 3 0 5 2 5 5 5 14 17 25 31 33 0 0 1 0 1 1 1 0 0 0 0 0z"
          fill="currentColor"
          style={{ transformOrigin: "130px 106px" }}
          className="octo-arm"
        ></path>
        <path
          d="M115 115c-7-7-12-15-14-24-1-3 1-5 4-5 3 0 5 2 5 5 1 9 6 17 13 23 0 0 0 0 1 1 0 0 0 0 0 0z"
          fill="currentColor"
          className="octo-body"
        ></path>
      </svg>
    </a>
  );
};

export default GitHubCorner;
