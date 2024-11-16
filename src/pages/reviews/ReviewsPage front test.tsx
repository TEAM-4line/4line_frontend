import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import ReviewCard from "../../components/reviews/ReviewCard";
import ReviewFilter from "../../components/reviews/ReviewFilter";

const ReviewsPage: React.FC = () => {
  // 샘플 게시글 데이터
  const samplePosts = [
    {
      id: 1,
      profile_image: "/images/sample-profile.svg",
      name: "Mutsa",
      trip_time: "1 week",
      cost: "150,000",
      region: "North America",
      rating: "★★★★☆",
      content:
        "Amumal Amumal beautiful trip~~~~~~ I wanna live there enjoying this beautiful scenery",
      photo: "/images/review-sample.png",
      like_count: 1116,
      bookmarks: 300,
    },
    {
      id: 2,
      profile_image: "/images/sample-profile.svg",
      name: "Alex",
      trip_time: "3 days",
      cost: "200,000",
      region: "Europe",
      rating: "★★★☆☆",
      content: "Paris was wonderful, but it was a little expensive!",
      photo: "/images/review-sample.png",
      like_count: 345,
      bookmarks: 150,
    },
    {
      id: 3,
      profile_image: "/images/sample-profile.svg",
      name: "John",
      trip_time: "2 weeks",
      cost: "500,000",
      region: "Asia",
      rating: "★★★★★",
      content: "Tokyo is amazing! I loved the food and culture.",
      photo: "/images/review-sample.png",
      like_count: 567,
      bookmarks: 245,
    },
  ];

  // 게시글 상태 정의
  // const [posts, setPosts] = useState(samplePosts);
  const Server_IP = process.env.REACT_APP_Server_IP;
  const [filteredPosts, setFilteredPosts] = useState(samplePosts);

  // 필터 적용 핸들러
  const handleFilter = (filters: {
    trip_time: string;
    trip_timeUnit: string;
    cost: string;
    costUnit: string;
    region: string;
  }) => {
    let filtered = samplePosts;

    // 필터링 조건 적용
    if (filters.trip_time) {
      filtered = filtered.filter((post) =>
        post.trip_time.includes(filters.trip_time)
      );
    }
    if (filters.cost) {
      filtered = filtered.filter(
        (post) =>
          parseInt(post.cost.replace(/,/g, "")) <=
          parseInt(filters.cost.replace(/,/g, ""))
      );
    }
    if (filters.region) {
      filtered = filtered.filter((post) =>
        post.region.includes(filters.region)
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <Wrapper>
      <ContentBox>
        <TopBarContainer>
          <TopBar PageName="Reviews" userImg="/images/sample-profile.svg" />
        </TopBarContainer>
        <FilterSection>
          <ReviewFilter onSearch={handleFilter} />
        </FilterSection>
        <ReviewList>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <ReviewCard
                key={post.id}
                // avatarSrc={post.avatarSrc}
                photo={post.photo}
                name={post.name}
                trip_time={post.trip_time}
                cost={post.cost}
                region={post.region}
                rating={post.rating}
                content={post.content}
                profile_image={`${Server_IP}/media/${post.profile_image}`}
                like_count={post.like_count}
                bookmarks={post.bookmarks}
              />
            ))
          ) : (
            <NoPostsMessage>
              No posts found. Please apply a different filter.
            </NoPostsMessage>
          )}
        </ReviewList>
      </ContentBox>
      <NavBarContainer>
        <NavBar pageName="reviews" />
      </NavBarContainer>
    </Wrapper>
  );
};

export default ReviewsPage;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ContentBox = styled.div`
  flex: 1;
  max-width: 412px;
  width: 100%;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 70px;
  overflow-y: auto;
  box-sizing: border-box;
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

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const NoPostsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: gray;
`;
