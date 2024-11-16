import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import axios from "axios";

const NewReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const Server_IP = process.env.REACT_APP_Server_IP; // 서버 IP 가져오기
  const accessToken = localStorage.getItem("access"); // 인증 토큰 가져오기
  const userId = localStorage.getItem("id"); // 사용자 ID 가져오기

  // 폼 상태 정의
  const [formValue, setFormValue] = useState({
    title: "",
    content: "",
    region: "",
    trip_time: "",
    cost: "",
    activity: "",
    rating: null as number | null,
  });

  // 폼 값 변경 시 호출되는 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 평점 선택 시 호출되는 핸들러
  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValue((prev) => ({
      ...prev,
      rating: parseInt(e.target.value, 10),
    }));
  };

  // 이미지 첨부 버튼 클릭 시 알림
  const handleImageUploadClick = () => {
    alert("아직 제공하지 않는 기능입니다.");
  };

  // 게시글 작성 버튼 클릭 시 호출되는 핸들러
  const handleSubmit = () => {
    // 필수 항목 유효성 검사
    if (
      formValue.title.trim() === "" ||
      formValue.content.trim() === "" ||
      formValue.region.trim() === "" ||
      formValue.trip_time.trim() === "" ||
      formValue.cost.trim() === "" ||
      formValue.activity.trim() === "" ||
      formValue.rating === null ||
      !userId
    ) {
      alert("모든 항목을 입력해 주세요");
      return;
    }

    // 필드 값 형식 맞추기
    const postData = {
      title: formValue.title.trim(),
      content: formValue.content.trim(),
      region: formValue.region.trim(),
      trip_time: formValue.trip_time.trim(),
      cost: parseInt(formValue.cost, 10), // 비용을 숫자 형식으로 변환
      activity: formValue.activity.trim(),
      rating: formValue.rating,
      writer: parseInt(userId, 10), // 사용자 ID를 숫자로 변환
    };

    console.log("게시글 작성 데이터:", postData);

    // 게시글 작성 요청 보내기
    axios
      .post(`${Server_IP}/api/community/post`, postData, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 인증 헤더 추가
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("게시글이 성공적으로 작성되었습니다!");
        // 폼 초기화
        setFormValue({
          title: "",
          content: "",
          region: "",
          trip_time: "",
          cost: "",
          activity: "",
          rating: null,
        });
        navigate(-1);
      })
      .catch((error) => {
        console.error("게시글 작성 실패:", error);
        if (error.response) {
          console.error("에러 응답:", error.response.data);
          alert(
            `게시글 작성 실패: ${
              error.response.data.detail || "다시 시도해 주세요."
            }`
          );
        } else {
          alert("게시글 작성에 실패했습니다. 다시 시도해 주세요.");
        }
      });
  };

  return (
    <PageWrapper>
      <TopBarContainer>
        <TopBar
          PageName={"New Review"}
          userImg={"/images/sample-profile.svg"}
        />
      </TopBarContainer>
      <ContentWrapper>
        <ContentBox>
          <Form>
            <Title>기억에 남는 여행 경험을 공유해주세요</Title>
            <FormField>
              <Label># 제목</Label>
              <Input
                name="title"
                value={formValue.title}
                onChange={handleChange}
                placeholder="제목을 입력해 주세요"
              />
            </FormField>
            <FormField>
              <Label># 여행기간</Label>
              <Input
                name="trip_time"
                value={formValue.trip_time}
                onChange={handleChange}
                placeholder="여행기간을 입력하세요"
              />
            </FormField>
            <FormField>
              <Label># 비용</Label>
              <Input
                name="cost"
                value={formValue.cost}
                onChange={handleChange}
                placeholder="비용을 입력하세요"
              />
            </FormField>
            <FormField>
              <Label># 지역</Label>
              <Input
                name="region"
                value={formValue.region}
                onChange={handleChange}
                placeholder="지역을 입력하세요"
              />
            </FormField>
            <FormField>
              <Label># 활동</Label>
              <Input
                name="activity"
                value={formValue.activity}
                onChange={handleChange}
                placeholder="활동을 입력하세요"
              />
            </FormField>
            <FormField>
              <Label># 평점</Label>
              <select
                name="rating"
                value={formValue.rating ?? ""}
                onChange={handleRatingChange}
              >
                <option value="">선택해 주세요</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </FormField>
            <FormField>
              <TextArea
                name="content"
                value={formValue.content}
                onChange={handleChange}
                placeholder="본문을 입력해 주세요"
              />
            </FormField>
            <FileUploadButton onClick={handleImageUploadClick}>
              사진/영상 첨부
            </FileUploadButton>
            <SubmitButton onClick={handleSubmit}>업로드</SubmitButton>
          </Form>
        </ContentBox>
      </ContentWrapper>
      <NavBarContainer>
        <NavBar pageName="reviews" />
      </NavBarContainer>
    </PageWrapper>
  );
};

export default NewReviewPage;

// Styled Components
const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const TopBarContainer = styled.div`
  width: 100%;
  max-width: 412px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 412px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px; /* TopBar 높이 고려 */
  padding-bottom: 70px; /* NavBar 높이 고려 */
  overflow-y: auto;
  box-sizing: border-box;
`;

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 412px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
`;

const ContentBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  height: 100px;
  resize: none;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;

const FileUploadButton = styled.button`
  padding: 12px;
  margin-top: 10px;
  background-color: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  margin: 15px 0px;
  background-color: var(--orange);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
