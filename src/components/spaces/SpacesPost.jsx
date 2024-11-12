import React from "react";
import styled from "styled-components";
import SampleProfile from "../../images/sample-profile.svg";
import FollowIcon from "../../images/follow-icon.png";

const SpacesPost = () => {
  const postData = [
    {
      id: 1,
      image: SampleProfile,
      name: "김멋사",
      age: 24,
      location: "하와이",
      duration: "5-7일",
      content:
        " 하와이 여행가려고 하는데 같이 여행 동행하실 분 모집합니다! 저는 ~~ 여행스타일을 추구해서 비슷한 여행 성향이신 분이시면 좋겠습니다!",
    },
    {
      id: 2,
      image: SampleProfile,
      name: "김멋사",
      age: 24,
      location: "하와이",
      duration: "5-7일",
      content:
        " 하와이 여행가려고 하는데 같이 여행 동행하실 분 모집합니다! 저는 ~~ 여행스타일을 추구해서 비슷한 여행 성향이신 분이시면 좋겠습니다!",
    },
    {
      id: 3,
      image: SampleProfile,
      name: "김멋사",
      age: 24,
      location: "하와이",
      duration: "5-7일",
      content:
        " 하와이 여행가려고 하는데 같이 여행 동행하실 분 모집합니다! 저는 ~~ 여행스타일을 추구해서 비슷한 여행 성향이신 분이시면 좋겠습니다!",
    },
  ];

  return (
    <>
      {postData.map((post, idx) => (
        <PostWrapper key={idx}>
          <Header>
            <UserSection>
              <ProfileImage src={post.image} />
              <Username>{post.name}</Username>
            </UserSection>
            <FollowButton src={FollowIcon} />
          </Header>
          <Details>
            <DetailItem>
              <Label># 나이</Label>
              <Value>{post.age}</Value>
            </DetailItem>
            <DetailItem>
              <Label># 여행 지역</Label>
              <Value>{post.location}</Value>
            </DetailItem>
            <DetailItem>
              <Label># 여행 기간</Label>
              <Value>{post.duration}</Value>
            </DetailItem>
            <Content>{post.content}</Content>
          </Details>
        </PostWrapper>
      ))}
    </>
  );
};

export default SpacesPost;

const PostWrapper = styled.div`
  width: 357px;
  border-radius: 20px;
  border: 2px solid #ebebeb;
  padding: 16px 23px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Username = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--orange);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
`;

const DetailItem = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.div`
  width: 75px;
  color: #6f7789;
  font-size: 13px;
`;

const Value = styled.div`
  color: black;
  font-size: 13px;
`;

const FollowButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Content = styled.div`
  font-size: 14px;
  color: black;
  margin-top: 18px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
