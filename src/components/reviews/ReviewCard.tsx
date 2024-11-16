import React from "react";
import UserInfo from "./UserInfo";
import TravelDetails from "./TravelDetails";
import ImageSection from "./ImageSection";
import InteractionBar from "./InteractionBar";
import styled from "styled-components";

interface ReviewCardProps {
  // avatarSrc: string;
  name: string;
  profile_image: string;
  trip_time: string;
  cost: string;
  region: string;
  rating: string;
  content: string;
  photo: string;
  like_count: number;
  bookmarks: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  // avatarSrc,
  name,
  profile_image,
  trip_time,
  cost,
  region,
  rating,
  content,
  photo,
  like_count,
  bookmarks,
}) => {
  return (
    <CardContainer>
      <UserInfo username={name} region={region} profile_image={profile_image} />
      <TravelDetails
        trip_time={trip_time}
        cost={cost}
        region={region}
        rating={rating}
        content={content}
      />
      <ImageSection photo={photo} />
      <InteractionBar like_count={like_count} bookmarks={bookmarks} />
    </CardContainer>
  );
};

export default ReviewCard;

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem auto; // 좌우 여백을 자동으로 하여 중앙 정렬
  width: 92%; // 전체 너비의 92%로 설정하여 약간의 여백 유지
  max-width: 400px; // NavBar와 TopBar보다 조금 짧게 설정하여 디자인 유지
  background-color: white; // 하얀색 배경으로 설정
  border-radius: 16px; // 모서리를 부드럽게 처리
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // 그림자 추가로 입체감 부여
  border: 1px solid #e0e0e0; // 카드 테두리 추가
`;
