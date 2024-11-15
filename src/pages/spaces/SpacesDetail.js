import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TopBar from "../../components/home/TopBar";
import CommentInput from "../../components/spaces/CommentInput";
import NavBar from "../../components/home/NavBar";
import SampleProfile from "../../images/sample-profile.svg";
import BannerImg from "../../images/banner-image.png";
import axios from "axios";

const SpacesDetail = () => {
  const Server_IP = process.env.REACT_APP_Server_IP;
  const accessToken = localStorage.getItem("access");
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // const response = await axios.get(`${Server_IP}/api/accompany/${id}/`, {
        const response = await axios.get(`${Server_IP}/api/accompany/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const postDetail = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setDetail(postDetail);
        console.log(postDetail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, [accessToken, Server_IP, id]);

  const profileImageURL = detail.profile_image
    ? `${Server_IP}/media/${detail.profile_image}`
    : SampleProfile;

  return (
    <Wrapper>
      <TopBar PageName={"Spaces"} userImg={SampleProfile} />
      <ContentContainer>
        <ContentBox>
          <AuthorSection>
            <ProfileImage src={profileImageURL} alt="작성자 프로필" />
            <AuthorInfo>
              <AuthorName>{detail.user_name}</AuthorName>
              <PostDate>{detail.created_at}</PostDate>
            </AuthorInfo>
          </AuthorSection>

          <InfoSection>
            <InfoItem>
              <InfoLabel># 나이</InfoLabel>
              <InfoValue>{detail.age}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel># 여행 지역</InfoLabel>
              <InfoValue>{detail.travel_area}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel># 여행 기간</InfoLabel>
              <InfoValue>{detail.travel_period}</InfoValue>
            </InfoItem>
          </InfoSection>

          <PostContent>{detail.description}</PostContent>
          <BannerImage src={BannerImg} alt="banner image" />

          <CommentSection>
            <CommentIcon>💬</CommentIcon>
            <CommentText>첫 댓글을 남겨주세요</CommentText>
          </CommentSection>
        </ContentBox>
      </ContentContainer>
      <CommentInput />
      <NavBar pageName={"spaces"} />
    </Wrapper>
  );
};

export default SpacesDetail;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
  position: relative;
`;

const ContentContainer = styled.div`
  padding-top: 86px;
  padding-bottom: 90px;
  overflow-y: auto;
  height: calc(100vh - 170px);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentBox = styled.div`
  padding: 30px;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 29px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AuthorName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange);
`;

const PostDate = styled.div`
  font-size: 16px;
  color: #6f7789;
  font-weight: 300;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 4px;
`;

const InfoLabel = styled.div`
  color: #6f7789;
  font-size: 16px;
  width: 90px;
`;

const InfoValue = styled.div`
  color: black;
  font-size: 16px;
`;

const PostContent = styled.div`
  font-size: 16px;
  color: black;
  line-height: 1.4;
  margin-bottom: 16px;
`;

const BannerImage = styled.img`
  margin-left: -30px;
  width: 412px;
  height: 81px;
  margin-bottom: 20px;
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c4c4c4;
  font-size: 14px;
`;

const CommentIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const CommentText = styled.div`
  font-size: 12px;
`;
