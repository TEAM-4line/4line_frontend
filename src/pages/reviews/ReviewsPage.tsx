import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ReviewFilter from "../../components/reviews/ReviewFilter";
import ReviewCard from "../../components/reviews/ReviewCard";
import TopBar from "../../components/home/TopBar";
import WriteBtn from "../../images/write-btn.png";
import NavBar from "../../components/home/NavBar";

interface FilterData {
  trip_time: string;
  cost: string;
  region: string;
}

interface Post {
  id: number;
  // avatarSrc: string;
  photo: string;
  name: string;
  trip_time: string;
  cost: string;
  region: string;
  rating: string;
  content: string;
  profile_image: string;
  like_count: number;
  bookmarks: number;
}

const Server_IP = process.env.REACT_APP_Server_IP || "http://localhost:8000";

const ReviewsPage: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const accessToken = localStorage.getItem("access");
  const navigate = useNavigate();

  // 필터링 조건을 사용하여 백엔드 API 호출
  const handleSearch = async (filterData: FilterData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${Server_IP}/api/community/post`, {
        params: filterData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFilteredPosts(response.data);
      console.log("filteredPosts", filteredPosts);
    } catch (error) {
      console.log(error);
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
                id={post.id}
                key={post.id}
                // avatarSrc={post.avatarSrc}
                photo={post.photo}
                name={post.name}
                trip_time={post.trip_time}
                cost={post.cost}
                region={post.region}
                rating={post.rating || "No Rating"}
                content={post.content}
                profile_image={`${Server_IP}/media/${post.profile_image}`}
                like_count={post.like_count}
                bookmarks={post.bookmarks}
              />
            ))
          ) : (
            <NoPostsMessage>찾고 싶은 정보를 입력해 주세요!</NoPostsMessage>
          )}
        </PostsSection>
      </ContentWrapper>
      <BtnBox>
        <Write
          src={WriteBtn}
          alt="write button"
          onClick={() => navigate("/reviews/new_review")}
        />
      </BtnBox>
      <NavBarContainer>
        <NavBar pageName="reviews" />
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
  padding-top: 90px;
  padding-bottom: 70px;
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
const BtnBox = styled.div`
  position: fixed;
  bottom: 96px;
  right: 530px;
`;

const Write = styled.img`
  width: 66px;
  height: 66px;
  cursor: pointer;
`;
