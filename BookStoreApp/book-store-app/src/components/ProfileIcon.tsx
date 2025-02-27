import React from "react";

function ProfileIcon() {
  return (
    <div className="bg-customPurple w-10 h-10 rounded flex items-center justify-center p-1">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="50" rx="4" fill="#F4F4FF" />
        <path
          d="M29.5714 19.4444C29.5714 21.899 27.5247 23.8889 25 23.8889C22.4753 23.8889 20.4286 21.899 20.4286 19.4444C20.4286 16.9898 22.4753 15 25 15C27.5247 15 29.5714 16.9898 29.5714 19.4444Z"
          stroke="#090937"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 27.2222C20.5817 27.2222 17 30.7045 17 35H33C33 30.7045 29.4183 27.2222 25 27.2222Z"
          stroke="#090937"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ProfileIcon;
