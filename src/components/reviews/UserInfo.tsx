import React from "react";
import styled from "styled-components";

interface UserInfoProps {
  username: string;
  region: string;
  profile_image: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  region,
  profile_image,
}) => {
  return (
    <UserInfoWrapper>
      <ProfileImg
        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/46bcb6a6bd223165193a3b52b2763e1eac3c68b580db04b6e0f2c694acd296ec?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac"
        // alt={`${username}'s profile`}
        src={profile_image}
      />
      <Username>{username}</Username>
      <ArrowIcon
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ae72a1abca4098bc74647503dd0c2ee23c1c6d095561842f35b96081314dda?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac"
        alt="arrow icon"
      />
      <Region>{region}</Region>
    </UserInfoWrapper>
  );
};

export default UserInfo;

const UserInfoWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 12px; // 각 요소 간의 간격을 더 넓게 조정
  font-size: 17px; // 기본 폰트 크기 설정
  color: #333; // 기본 텍스트 색상 설정
`;

const ProfileImg = styled.img`
  width: 32px; // 프로필 이미지 크기 줄임
  height: 32px;
  border-radius: 50%; // 둥근 모서리로 프로필 이미지
`;

const Username = styled.span`
  font-weight: 600; // 이름의 가독성을 높이기 위해 두껍게 설정
  color: #000; // 검은색으로 변경하여 강조
`;

const ArrowIcon = styled.img`
  width: 14px; // 화살표 크기 가이드라인에 맞춰 작게 설정
  height: auto; // 원래의 비율 유지
`;

const Region = styled.span`
  font-weight: 500; // 기본 두께 설정
  color: #ffa500; // 감귤색 (오렌지 색상)으로 설정하여 강조
`;
