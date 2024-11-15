import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import WriteInput from "../../components/spaces/WriteInput";
import OrangeBtn from "../../components/common/OrangeBtn";
import axios from "axios";

const SpacesWrite = () => {
  const Server_IP = process.env.REACT_APP_Server_IP;
  const accessToken = localStorage.getItem("access");
  const [postValue, setPostValue] = useState({
    age: "",
    travel_area: "",
    travel_period: "",
    description: "",
  });

  const isFilled =
    Boolean(postValue.age) &&
    Boolean(postValue.travel_area) &&
    Boolean(postValue.travel_period) &&
    Boolean(postValue.description);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "age" && (value === "" || /^\d+$/.test(value))) {
      setPostValue((prev) => ({
        ...prev,
        [name]: value === "" ? alert("숫자를 입력해 주세요") : parseInt(value),
      }));
    } else if (name !== "age") {
      setPostValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const submitPost = () => {
    if (!isFilled) {
      alert("모든 항목을 입력해 주세요");
    } else {
      alert("게시글이 작성되었습니다.");
      setPostValue({
        age: "",
        travel_area: "",
        travel_period: "",
        description: "",
      });
      axios
        .post(`${Server_IP}/api/accompany/`, postValue, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("테스트가 완료되었습니다!");
        })
        .catch((error) => {
          console.error(error);
          alert("결과 전송에 실패했습니다.");
        });
    }
  };

  return (
    <div>
      <Wrapper>
        <TopBar PageName={"Spaces"} />
        <ContentBox>
          <Text>동행을 찾기 위한 정보를 입력해 주세요</Text>
          <WriteInput
            label={"# 나이"}
            placeholder={"나이를 입력해 주세요"}
            value={postValue.age}
            name="age"
            onChange={onChange}
          />
          <WriteInput
            label={"# 여행 지역"}
            placeholder={"여행할 지역을 입력해 주세요"}
            value={postValue.travel_area}
            name="travel_area"
            onChange={onChange}
          />
          <WriteInput
            label={"# 여행 기간"}
            placeholder={"여행 기간을 입력해 주세요"}
            value={postValue.travel_period}
            name="travel_period"
            onChange={onChange}
          />
          <ContentInput
            placeholder="내용을 입력해주세요"
            value={postValue.description}
            name="description"
            onChange={onChange}
          />
          <BtnBox>
            <OrangeBtn txt="게시글 작성" onBtnClick={submitPost} />
          </BtnBox>
        </ContentBox>
        <NavBar pageName={"spaces"} />
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

const ContentBox = styled.div`
  margin: 86px 27px;
  min-height: 580px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Text = styled.div`
  margin: 22px 0px;
  font-size: 20px;
  font-weight: bold;
`;

const ContentInput = styled.textarea`
  font-family: "Pretendard";
  resize: none;
  margin-top: 10px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  width: 356px;
  margin-left: 1px;
  padding: 5px;
  height: 300px;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;

const BtnBox = styled.div`
  margin-top: 35px;
`;
