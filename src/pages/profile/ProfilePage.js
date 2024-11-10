import React from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import MenuBox from "../../components/profile/MenuBox";
import SampleProfile from "../../images/sample-profile.svg";
import profileCircle from "../../images/profile-circle.svg";

const ProfilePage = () => {
  return (
    <div>
      <Wrapper>
        <ContentBox>
          <TopBar PageName={"Profile"} userImg={SampleProfile} />
          <InfoBox>
            <UserImg src={profileCircle} />
            <UserName>Mutsa</UserName>
            <UserEmail>mutsa@mutsa.com</UserEmail>
          </InfoBox>
          <IntroBox>
            <IntroTitle>I travel like a...</IntroTitle>
            <IntroText>Growling lion ddddddddddddddddddddd🦁</IntroText>
          </IntroBox>
          <MenuBox />
          <NavBar />
        </ContentBox>
      </Wrapper>
    </div>
  );
};

export default ProfilePage;
const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  margin: 86px 0px;
  min-height: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InfoBox = styled.div`
  padding: 35px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserImg = styled.img`
  width: 100px;
  margin-bottom: 16px;
`;

const UserName = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 600;
  margin-bottom: 5px;
`;

const UserEmail = styled.div`
  font-size: 13px;
  color: #7d848d;
`;

const IntroBox = styled.div`
  width: 369px;
  padding: 15px 22px;
  margin: 19px 22px;
  border-radius: 16px;
  box-shadow: 5px 5px 10px 0px rgba(211, 209, 216, 0.25);
`;

const IntroTitle = styled.div`
  font-size: 11px;
  font-weight: light;
  margin-bottom: 8px;
`;
const IntroText = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: var(--orange);
  text-align: center;
  width: 315px;
  padding: 0px 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
