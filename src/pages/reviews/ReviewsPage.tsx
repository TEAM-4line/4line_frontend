import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/home/TopBar';
import NavBar from '../../components/home/NavBar';
import ReviewCard from '../../components/reviews/ReviewCard';

const ReviewPage: React.FC = () => {
  return (
    <Wrapper>
      <ContentBox>
        <TopBar PageName={"Reviews"} userImg={"/images/sample-profile.svg"} />
          <ReviewCard
            avatarSrc="/images/sample-profile.svg"
            name="Mutsa"
            location="Banff, Canada"
            duration="1 week"
            cost="150,000"
            region="North America"
            rating="★★★★☆"
            description="Amumal Amumal beautiful trip~~~~~~ I wanna live there enjoying this beautiful scenery"
            imageSrc={"/images/review-sample.png"}
            likes={1116}
          />

          <ReviewCard
            avatarSrc="/images/sample-profile.svg"
            name="Mutsa"
            location="Banff, Canada"
            duration="1 week"
            cost="150,000"
            region="North America"
            rating=""
            description="Amumal Amumal beautiful trip~~~~~~ I wanna live there enjoying this beautiful scenery"
            imageSrc={"/images/review-sample.png"}
            likes={0}
          />
        <NavBar />
      </ContentBox>
    </Wrapper>
  );
};

export default ReviewPage;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
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
