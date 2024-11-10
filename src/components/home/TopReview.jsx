import React from "react";
// import BookmarkFalse from "../../images/icon-bookmark-false.svg";
import BookmarkTrue from "../../images/icon-bookmark-true.svg";
// import HeartFalse from "../../images/icon-heart-false.svg";
import HeartTrue from "../../images/icon-heart-true.svg";
import LocationIcon from "../../images/icon-location.svg";
import SampleImg from "../../images/review-sample.png";
import styled from "styled-components";

const TopReview = () => {
  const ReviewInfo = [
    {
      id: 1,
      image: SampleImg,
      title: "Another A+ tour",
      location: "New York",
      likes: 123,
      bookmarks: 502,
    },
    {
      id: 2,
      image: SampleImg,
      title: "Another A+ tour",
      location: "New York",
      likes: 123,
      bookmarks: 502,
    },
    {
      id: 3,
      image: SampleImg,
      title: "Another A+ tour",
      location: "New York",
      likes: 123,
      bookmarks: 502,
    },
    {
      id: 4,
      image: SampleImg,
      title: "Another A+ tour",
      location: "New York",
      likes: 123,
      bookmarks: 502,
    },
  ];

  return (
    <div>
      {ReviewInfo.map((review, index) => (
        <TopReviewWrapper key={index}>
          <Left>
            <Img src={review.image} />
          </Left>
          <Right>
            <Title>{review.title}</Title>
            <IconRow>
              <IconWithText icon={LocationIcon} text={review.location} />
              <IconWithText icon={HeartTrue} text={review.likes} />
              <IconWithText icon={BookmarkTrue} text={review.bookmarks} />
            </IconRow>
          </Right>
        </TopReviewWrapper>
      ))}
    </div>
  );
};

const IconWithText = ({ icon, text }) => (
  <IconTextWrapper>
    <Icon src={icon} alt="" />
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
  margin: 8px 0px;
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
`;
