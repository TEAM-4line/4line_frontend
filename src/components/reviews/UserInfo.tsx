import React from 'react';

interface UserInfoProps {
  username: string;
  location: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username, location }) => {
  return (
    <header className="flex gap-3.5 self-start text-base">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46bcb6a6bd223165193a3b52b2763e1eac3c68b580db04b6e0f2c694acd296ec?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac" className="object-contain shrink-0 w-6 rounded-2xl aspect-[0.96]" alt={`${username}'s profile`} />
      <h2 className="self-start text-black">{username}</h2>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ae72a1abca4098bc74647503dd0c2ee23c1c6d095561842f35b96081314dda?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac" className="object-contain shrink-0 my-auto w-2.5 rounded-none aspect-[0.71]" alt="" />
      <p className="self-start font-medium text-orange-400 basis-auto">{location}</p>
    </header>
  );
};

export default UserInfo;