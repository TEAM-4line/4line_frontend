import React from "react";
import styled from "styled-components";
import axios from "axios";

interface InteractionBarProps {
  id: number;
  like_count: number;
  bookmarks: number;
}

const InteractionBar: React.FC<InteractionBarProps> = ({
  id,
  like_count,
  bookmarks,
}) => {
  const Server_IP = process.env.REACT_APP_Server_IP || "http://localhost:8000";
  const accessToken = localStorage.getItem("access");

  const handlePostLike = async (id: number) => {
    try {
      const response = await axios.post(
        `${Server_IP}/api/community/post/${id}/like`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // setFilteredPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostScrap = async (id: number) => {
    try {
      const response = await axios.post(
        `${Server_IP}/api/community/post/${id}/scrap`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // setFilteredPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BarContainer>
      {/* 좋아요 버튼 */}
      <ButtonContainer>
        <Button aria-label="Like" onClick={() => handlePostLike(id)}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/875c15b294a13dfc09e9c842e6e6782bd88c2808f1ba3f9dc74fc7bee3b265a4?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac"
            className="object-contain shrink-0 aspect-[1.1] w-[22px]"
            alt="Like"
          />
        </Button>
        <Count>{like_count}</Count>
      </ButtonContainer>

      {/* 북마크 버튼 */}
      <ButtonContainerRight>
        <Button
          aria-label="Bookmark"
          onClick={() => handlePostScrap(id)} // 북마크 로직을 추가할 수 있습니다
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c903e585dfa758491d59a8e6339db72f5bfa34890a3e556374d71af807ac42d6?placeholderIfAbsent=true&apiKey=759653f2ab50441cb226416825bdb2ac"
            alt="Bookmark"
          />
        </Button>
        <Count>{bookmarks}</Count>
      </ButtonContainerRight>
    </BarContainer>
  );
};

export default InteractionBar;

const BarContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px; // ReviewCard의 너비와 일치하게 설정
  padding: 1rem 0; // 상하 여백 추가
  font-size: 0.875rem;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem; // 버튼과 카운트 사이 간격 추가
  margin-left: 5px; // 좋아요 버튼과 왼쪽 컨테이너 벽 사이 간격
`;

const ButtonContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-right: 5px; // 북마크와 오른쪽 컨테이너 벽 사이 간격 일치시킴
`;

const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  img {
    width: 24px; // 아이콘의 크기를 24x24로 설정하여 일관성 유지
    height: 24px;
  }
`;

const Count = styled.span`
  font-weight: 500; // 숫자의 가독성을 높이기 위해 약간 두껍게 설정
  color: #444; // 진한 회색으로 설정하여 시각적 균형 유지
`;
