import React from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import ReviewCard from "../../components/reviews/ReviewCard";

const Server_IP = process.env.REACT_APP_Server_IP || "http://localhost:8000";

const ReviewPage: React.FC = () => {
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
      photo: "/images/sample-profile.svg",
      like_count: 1116,
      bookmarks: 300,
    },
    {
      id: 2,
      profile_image: "/images/sample-profile.svg",
      name: "Mutsa",
      trip_time: "1 week",
      cost: "150,000",
      region: "North America",
      rating: "",
      content:
        "Amumal Amumal beautiful trip~~~~~~ I wanna live there enjoying this beautiful scenery",
      photo: "/images/review-sample.png",
      like_count: 0,
      bookmarks: 0,
    },
  ];

  return (
    <Wrapper>
      <ContentBox>
        <TopBar PageName="Reviews" userImg="/images/sample-profile.svg" />
        {samplePosts.map((post) => (
          <ReviewCard
            id={post.id}
            key={post.id}
            // avatarSrc={post.avatarSrc}
            name={post.name}
            trip_time={post.trip_time}
            cost={post.cost}
            region={post.region}
            rating={post.rating || "No Rating"}
            content={post.content}
            profile_image={`${Server_IP}${post.profile_image}`}
            photo={post.photo}
            like_count={post.like_count}
            bookmarks={post.bookmarks}
          />
        ))}
        <NavBar pageName="reviews" />
      </ContentBox>
    </Wrapper>
  );
};

export default ReviewPage;

// Styled Components
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 412px;
  margin: 0 auto;
  width: 100%;
  background-color: white;
`;

const ContentBox = styled.div`
  margin: 86px 0px;
  min-height: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
