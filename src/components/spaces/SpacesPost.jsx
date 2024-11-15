import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SampleProfile from "../../images/sample-profile.svg";
import FollowIcon from "../../images/follow-icon.png";

const SpacesPost = ({ posts }) => {
  const navigate = useNavigate();
  const Server_IP = process.env.REACT_APP_Server_IP;

  const handleFollowAlert = () => {
    alert("아직 준비중인 기능입니다!");
  };
  //   console.log(`${Server_IP}/${posts.profile_image}`);

  return (
    <>
      {posts?.map((post) => (
        <PostWrapper key={post.id}>
          <Header>
            <UserSection>
              <ProfileImage
                src={
                  `${Server_IP}/media/${post.profile_image}` || SampleProfile
                }
                alt="Profile"
              />
              <Username>{post.user_name}</Username>
            </UserSection>
            <FollowButton src={FollowIcon} onClick={handleFollowAlert} />
          </Header>
          <Details onClick={() => navigate(`/spaces/detail/${post.id}`)}>
            <DetailItem>
              <Label># 나이</Label>
              <Value>{post.age}</Value>
            </DetailItem>
            <DetailItem>
              <Label># 여행 지역</Label>
              <Value>{post.travel_area}</Value>
            </DetailItem>
            <DetailItem>
              <Label># 여행 기간</Label>
              <Value>{post.travel_period}</Value>
            </DetailItem>
            <Content>{post.description}</Content>
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
