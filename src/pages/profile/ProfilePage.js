import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import MenuBox from "../../components/profile/MenuBox";
import SampleProfile from "../../images/sample-profile.svg";
import profileCircle from "../../images/profile-circle.svg";
import axios from "axios";

const ProfilePage = () => {
  const Server_IP = process.env.REACT_APP_Server_IP;

  const { name } = useParams();

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchUserProfile = async () => {
      const accessToken = localStorage.getItem("access");
      try {
        const response = await axios.get(
          `${Server_IP}/api/users/profile/?name=${name}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        const profileImageURL =
          response.data.profile_image &&
          response.data.profile_image.startsWith("/")
            ? `${Server_IP}${response.data.profile_image}`
            : profileCircle;
        setUserInfo({
          name: response.data.name,
          profile: profileImageURL,
          email: response.data.email,
          intro: response.data.intro,
        });
        console.log(userInfo);
        console.log("Profile Image URL:", profileImageURL);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    fetchUserProfile();
  }, [name, Server_IP]);

  return (
    <div>
      <Wrapper>
        <ContentBox>
          <TopBar PageName={"Profile"} userImg={SampleProfile} />
          <InfoBox>
            <UserImg src={userInfo.profile || profileCircle} />
            <UserName>{userInfo.name}</UserName>
            <UserEmail>{userInfo.email}</UserEmail>
          </InfoBox>
          <IntroBox>
            <IntroTitle>I travel like a...</IntroTitle>
            <IntroText>{userInfo.intro}</IntroText>
          </IntroBox>
          <MenuBox />
          <NavBar pageName={"profile"} />
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
  min-height: 550px;
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
