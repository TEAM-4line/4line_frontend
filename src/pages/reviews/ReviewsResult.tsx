import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../../components/home/TopBar';
import NavBar from '../../components/home/NavBar';
import ReviewCard from '../../components/reviews/ReviewCard';
import WriteBtn from "../../images/write-btn.png";

const ReviewsResult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { filteredPosts, loading, error } = location.state || {
    filteredPosts: [],
    loading: false,
    error: null,
  };

  return (
    <Wrapper>
      <TopBarContainer>
        <TopBar PageName="Reviews" userImg="/images/sample-profile.svg" />
      </TopBarContainer>
      <ContentBox>
        {loading ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post: any) => (
            <ReviewCard
              key={post.id}
              avatarSrc={post.avatarSrc}
              name={post.name}
              region={post.region}
              duration={post.duration}
              cost={post.cost}
              rating={post.rating}
              description={post.description}
              imageSrc={post.imageSrc}
              likes={post.likes}
              bookmarks={post.bookmarks}
            />
          ))
        ) : (
          <NoPostsMessage>No posts found. Please apply a different filter.</NoPostsMessage>
        )}
      </ContentBox>
      <NavBarContainer>
        <NavBar pageName="reviews/result" />
      </NavBarContainer>
      <BtnBox>
        <Write
          src={WriteBtn}
          alt="write button"
          onClick={() => navigate("/reviews/new_review")}
        />
      </BtnBox>
    </Wrapper>
  );
};

export default ReviewsResult;

// Styled Components
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 412px;
  margin: 0 auto;
  width: 100%;
  background-color: white;
  overflow: hidden; // 스크롤바 안 보이게 처리
`;

const TopBarContainer = styled.div`
  width: 100%;
  max-width: 412px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
`;

const ContentBox = styled.div`
  margin: 86px 0px;
  min-height: 780px;
  overflow-y: auto;
  max-width: 412px;
  width: 100%;
  padding-top: 80px; // TopBar의 높이를 고려한 패딩 추가
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 412px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
`;

const NoPostsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: gray;
`;

const BtnBox = styled.div`
  position: fixed;
  bottom: 75px;
  right: 170px;
`;

const Write = styled.img`
  width: 66px;
  height: 66px;
  cursor: pointer;
`;
