import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import FilterBar from "../../components/spaces/FilterBar";
import SpacesPost from "../../components/spaces/SpacesPost";
import NavBar from "../../components/home/NavBar";
import SampleProfile from "../../images/sample-profile.svg";
import WriteBtn from "../../images/write-btn.png";

const SpacesPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <TopBar PageName={"Spaces"} userImg={SampleProfile} />
        <FilterBar />
        <ContentBox>
          <PostWrapper>
            <SpacesPost />
          </PostWrapper>
        </ContentBox>
        <BtnBox>
          <Write
            src={WriteBtn}
            alt="write button"
            onClick={() => navigate("/spaces/write")}
          />
        </BtnBox>
        <NavBar />
      </Wrapper>
    </div>
  );
};

export default SpacesPage;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  margin: 86px 0px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PostWrapper = styled.div`
  padding: 20px 27px;
  margin-top: 134px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* background: linear-gradient(to bottom, #ff9c00, white); */
`;

const BtnBox = styled.div`
  position: fixed;
  bottom: 96px;
  right: 530px;
`;
const Write = styled.img`
  width: 66px;
  height: 66px;
  cursor: pointer;
`;
