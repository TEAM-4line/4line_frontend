import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/home/NavBar";
import CategoryBar from "../../components/home/CategoryBar";
import TopReview from "../../components/home/TopReview";
import TypeImg from "../../components/home/TypeImg";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [communityPosts, setCommunityPosts] = useState([]);
  const Server_IP = process.env.REACT_APP_Server_IP;

  useEffect(() => {
    const fetchUserProfile = async () => {
      const accresToken = localStorage.getItem("access");
      try {
        const response = await axios.get(`${Server_IP}/api/main/`, {
          headers: {
            Authorization: `Bearer ${accresToken}`,
          },
        });
        console.log(response.data);
        setUserInfo({
          name: response.data.user_info.name,
          usertype: response.data.user_info.trip_type,
          typecontent: response.data.user_info.type_content,
        });
        setCommunityPosts(response.data.popular_communities);
        console.log(communityPosts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
    // eslint-disable-next-line
  }, [Server_IP]);

  return (
    <Wrapper>
      <ContentBox>
        <UserBox>
          <UserInfo>
            <div style={{ lineHeight: 1.4 }}>
              <UserType>{userInfo.typecontent}</UserType>
              <UserName>
                <span>{userInfo.name}</span>님
              </UserName>
            </div>
            <SubText>
              당신은 누구와
              <br />
              여행하시겠습니까?
            </SubText>
          </UserInfo>
          <TypeImg type={userInfo.usertype} />
        </UserBox>
        <CategoryBar />
        <TopReviewBox>
          <TitleBox>
            <Title>Top Reviews</Title>
            <ViewAll onClick={() => navigate("/reviews")}>View All</ViewAll>
          </TitleBox>
          <TopReview reviews={communityPosts} />
        </TopReviewBox>
        <NavBar pageName="home" />
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
  margin-bottom: 86px;
  background: linear-gradient(to bottom, #ff9c00, white);
  min-height: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserBox = styled.div`
  width: 348px;
  height: 164px;
  margin: 39px 33px 30px 33px;
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
  font-size: 23px;
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
  font-size: 20px;
  font-weight: bolder;
  color: white;
  line-height: 1.4;
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
  color: black;
  font-size: 14px;
  border: none;
  background: none;
  cursor: pointer;
`;
