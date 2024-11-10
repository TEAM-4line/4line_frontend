// HomePage.js
import React from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import CategoryZone from "../../components/home/CategoryZone";
import SampleProfile from "../../images/sample-profile.svg";
import TypeLion from "../../images/type-lion.svg";
import TopReview from "../../components/home/TopReview";

const HomePage = () => {
  const userInfo = {
    profileImg: SampleProfile,
    username: "김멋사",
    usertype: "호기심 많은 탐험가 원숭이,",
    typeImg: TypeLion,
  };

  return (
    <Wrapper>
      <TopBar userImg={userInfo.profileImg} />
      <ContentBox>
        <UserBox>
          <UserInfo>
            <div style={{ lineHeight: 1.4 }}>
              <UserType>{userInfo.usertype}</UserType>
              <UserName>
                <span>{userInfo.username}</span>님
              </UserName>
            </div>
            <SubText>
              당신은 누구와
              <br />
              여행하시겠습니까?
            </SubText>
          </UserInfo>
          <TypeImg src={userInfo.typeImg} alt="유저 타입 이미지" />
        </UserBox>
        <CategoryZone />
        <TopReviewBox>
          <TitleBox>
            <Title>Top Reviews</Title>
            <ViewAll>View All</ViewAll>
          </TitleBox>
          <TopReview />
        </TopReviewBox>
        <NavBar navIndex={0} />
      </ContentBox>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  margin: 86px 0px;
  background: linear-gradient(to bottom, #ff9c00, white);
  min-height: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserBox = styled.div`
  width: 368px;
  height: 164px;
  margin: 39px 22px 30px 22px;
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const UserType = styled.div`
  font-size: 20px;
  width: 224px;
  color: white;
  font-weight: 600;
`;

const UserName = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;

  > span {
    color: var(--brown);
  }
`;

const SubText = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: white;
  line-height: 1.4;
`;

const TypeImg = styled.img`
  height: 164px;
  border-radius: 100px;
`;

const TopReviewBox = styled.div`
  margin: 0px 34px;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const ViewAll = styled.button`
  font-size: 14px;
  border: none;
  background: none;
  cursor: pointer;
`;
