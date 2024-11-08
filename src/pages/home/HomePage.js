import React from "react";
import styled from "styled-components";
import NavBar from "../../components/home/NavBar";

const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <NavBar navIndex={0} />
      </Wrapper>
    </div>
  );
};

export default HomePage;

const Wrapper = styled.div`
  width: 412px;
  min-height: 917px;
  max-height: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0 auto;
  box-sizing: border-box;
  background: linear-gradient(to bottom, var(--orange), white);
`;
