import React from 'react';

const ProfileIcon = ({ isSelected }) => {
  return (
    <svg
      width="25"
      height="27"
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.55775 13.7862C9.66352 14.5939 11.0289 15.0651 12.5001 15.0651C16.0981 15.0651 19.2308 11.9506 19.2308 8.33428C19.2308 4.62275 16.2116 1.60352 12.5001 1.60352C8.78852 1.60352 5.76929 4.62275 5.76929 8.33428C5.76929 10.5747 6.86544 12.5651 8.55775 13.7862Z"
        fill={isSelected ? "#1C1C59" : "#1E1D5B"}
      />
      <path
        d="M18.4231 14.6323C16.875 16.0939 14.7885 16.9881 12.5 16.9881C10.2115 16.9881 8.125 16.0939 6.57692 14.6323C2.66346 16.7477 0 20.8919 0 25.6419C0 26.1708 0.432692 26.6035 0.961538 26.6035H24.0385C24.5673 26.6035 25 26.1708 25 25.6419C25 20.8919 22.3365 16.7477 18.4231 14.6323Z"
        fill={isSelected ? "#1C1C59" : "#1E1D5B"}
      />
    </svg>
  );
};

export default ProfileIcon;
