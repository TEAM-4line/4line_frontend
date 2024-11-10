import React from "react";
import styled from "styled-components";
import BackBtn from "../../images/back-btn.svg";

const TopBar = ({ userImg }) => {
  return (
    <div>
      <TopWrapper>
        <BackBtnBox src={BackBtn} alt="뒤로가기 버튼" />
        <TopTitle>Home</TopTitle>
        <UserImg src={userImg} alt="샘플 프로필 이미지" />
      </TopWrapper>
    </div>
  );
};

export default TopBar;

const TopWrapper = styled.div`
  width: 413px;
  height: 86px;
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6f7789;
  padding: 0px 24px;
`;

const BackBtnBox = styled.img`
  width: 38px;

  border-radius: 12px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;
const TopTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const UserImg = styled.img`
  width: 38px;
  border-radius: 12px;
`;
