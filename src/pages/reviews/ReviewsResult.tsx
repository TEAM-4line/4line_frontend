import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../../components/home/TopBar';
import NavBar from '../../components/home/NavBar';
import ReviewCard from '../../components/reviews/ReviewCard';

const ReviewsResult: React.FC = () => {
  const location = useLocation();
  const { filteredPosts, loading, error } = location.state || {
    filteredPosts: [],
    loading: false,
    error: null,
  };

  return (
    <Wrapper>
      <TopBar PageName={"Reviews"} userImg={"/images/sample-profile.svg"} />
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
              location={post.location}
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
      </ContentBox>
      <NavBar pageName="reviews/result"/>
    </Wrapper>
  );
};

export default ReviewsResult;

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
