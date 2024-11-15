import React from "react";
import BookmarkTrue from "../../images/icon-bookmark-true.svg";
import HeartTrue from "../../images/icon-heart-true.svg";
import LocationIcon from "../../images/icon-location.svg";
import SampleImg from "../../images/review-sample.png";
import styled from "styled-components";

const TopReview = ({ reviews }) => {
  return (
    <div>
      {reviews?.map((review) => (
        <TopReviewWrapper key={review.id}>
          <Left>
            <Img src={review.photo || SampleImg} />
          </Left>
          <Right>
            <Title>{review.title}</Title>
            <IconRow>
              <IconWithText icon={LocationIcon} text={review.region} />
              <IconWithText icon={HeartTrue} text={review.like_count} />
              <IconWithText icon={BookmarkTrue} text={review.scrap_count} />
            </IconRow>
          </Right>
        </TopReviewWrapper>
      ))}
    </div>
  );
};

const IconWithText = ({ icon, text }) => (
  <IconTextWrapper>
    <Icon src={icon} alt="아이콘" />
    <Text>{text}</Text>
  </IconTextWrapper>
);

export default TopReview;
const TopReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  width: 344px;
  height: 128px;
  padding: 12px 17px;
  gap: 12px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Img = styled.img`
  width: 90px;
  height: 100px;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Icon = styled.img`
  width: 14px;
`;

const Text = styled.span`
  font-size: 12px;
  color: #6f7789;
  font-weight: light;
`;
