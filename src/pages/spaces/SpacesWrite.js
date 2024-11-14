import React from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";

const SpacesWrite = () => {
  return (
    <div>
      <Wrapper>
        <TopBar PageName={"Spaces"} />
        <NavBar />
      </Wrapper>
    </div>
  );
};

export default SpacesWrite;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
`;
