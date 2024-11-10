import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackBtn from "../../images/back-btn.svg";

const TopBar = ({ userImg, PageName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <TopWrapper>
        <BackBtnBox
          src={BackBtn}
          alt="뒤로가기 버튼"
          style={{
            visibility: location.pathname === "/home" ? "hidden" : "visible",
          }}
          onClick={() => navigate(-1)}
        />
        <TopTitle>{PageName}</TopTitle>
        <UserImg
          src={userImg}
          alt="샘플 프로필 이미지"
          onClick={() => navigate("/profile/:userId")}
        />
      </TopWrapper>
    </div>
  );
};

export default TopBar;

const TopWrapper = styled.div`
  width: 412px;
  height: 86px;
  border-bottom: 1px solid #d9d9d9;
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
  cursor: pointer;
`;
const TopTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const UserImg = styled.img`
  width: 38px;
  border-radius: 12px;
  cursor: pointer;
`;
