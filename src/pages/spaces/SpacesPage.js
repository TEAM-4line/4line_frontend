import React from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import SampleProfile from "../../images/sample-profile.svg";
import FilterBar from "../../components/spaces/FilterBar";

const SpacesPage = () => {
  return (
    <div>
      <Wrapper>
        <ContentBox>
          <TopBar PageName={"Spaces"} userImg={SampleProfile} />
          <FilterBar />

          <NavBar />
        </ContentBox>
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
  /* background: linear-gradient(to bottom, #ff9c00, white); */
  min-height: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
