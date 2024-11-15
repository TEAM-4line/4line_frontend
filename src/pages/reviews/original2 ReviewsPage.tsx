import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewFilter from '../../components/reviews/ReviewFilter';
import ReviewCard from '../../components/reviews/ReviewCard';
import TopBar from '../../components/home/TopBar';
import NavBar from '../../components/home/NavBar';

const ReviewsPage: React.FC = () => {
  // 상태 정의: 필터링된 게시글들
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 필터링 조건을 사용하여 백엔드 API 호출
  const handleSearch = async (filterData: { duration: string; cost: string; region: string }) => {
    setLoading(true);
    setError(null);
    try {
      // 백엔드 API 요청
      const response = await axios.get('https://api.your-backend.com/community/posts', {
        params: {
          duration: filterData.duration,
          cost: filterData.cost,
          region: filterData.region,
        },
      });
      // 필터링된 결과를 상태로 설정
      setFilteredPosts(response.data);
    } catch (err) {
      console.error('게시글 필터링 실패:', err);
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <TopBarContainer>
        <TopBar PageName={"Reviews"} userImg={"/images/sample-profile.svg"} />
      </TopBarContainer>
      <ContentWrapper>
        {/* 필터링 컴포넌트 */}
        <FilterSection>
          <ReviewFilter onSearch={handleSearch} />
        </FilterSection>

        {/* 게시글 목록 표시 */}
        <PostsSection>
          {loading ? (
            <LoadingMessage>Loading...</LoadingMessage>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <ReviewCard
                key={post.id}
                avatarSrc={post.avatarSrc}
                name={post.name}
                // location={post.location}
                duration={post.duration}
                cost={post.cost}
                region={post.region}
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
        </PostsSection>
      </ContentWrapper>
      <NavBarContainer>
        <NavBar pageName="reviews"/>
      </NavBarContainer>
    </PageWrapper>
  );
};

export default ReviewsPage;

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 412px; 
  width: 100%;
  margin: 0 auto;
  padding-top: 90px; // TopBar의 높이를 고려한 패딩
  padding-bottom: 70px; // NavBar의 높이를 고려한 패딩
  overflow-y: auto;
  box-sizing: border-box;
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

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const PostsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
