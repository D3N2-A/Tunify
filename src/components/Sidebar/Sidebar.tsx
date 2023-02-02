import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">This is a logo</div>
      <div className="sidebar-min">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0L0 5.35897V19H7V12.1795H11V19H18V5.35897L9 0Z"
            fill="white"
          />
        </svg>
        Home
      </div>
      <div className="sidebar-min">
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5925 16.6418C17.5056 15.0139 18.7194 12.5864 18.7194 9.87496C18.7194 4.97345 14.7528 1 9.85972 1C4.96663 1 1 4.97345 1 9.87496C1 14.7765 4.96663 18.7499 9.85972 18.7499C12.046 18.7499 14.0473 17.9567 15.5925 16.6418ZM15.5925 16.6418L21 22"
            stroke="#999999"
            strokeLinecap="round"
          />
        </svg>
        Search
      </div>
      <div className="sidebar-playlist">
        <div className="sidebar-playlist-card">
          <span>Create Playlist</span>
        </div>
        <div className="sidebar-playlist-card">Favourite Songs</div>
      </div>
    </div>
  );
};
export default Sidebar;
