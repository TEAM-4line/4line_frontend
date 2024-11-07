import React, { useState } from "react";
import styled from "styled-components";
import questionsData from "../../dummy/TestData.json";
import ProgressBar from "../../components/test/ProgressBar";

const TestPage = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption, // 선택된 옵션만 answer 객체로 저장 (백 연동 때 사용)
    }));
  };

  const handleNextClick = () => {
    const currentQuestionId = currentQuestionIndex + 1;
    if (!answers[currentQuestionId]) {
      alert("옵션을 선택해주세요.");
      return;
    }

    if (currentQuestionIndex < questionsData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("유형테스트 결과 데이터:", answers);
      alert("테스트가 완료되었습니다!");
    }
  };

  const currentQuestion = questionsData.questions[currentQuestionIndex];

  return (
    <div>
      <Wrapper>
        <ProgressBarWrapper>
          <ProgressBar current={currentQuestionIndex + 1} total={10} />
        </ProgressBarWrapper>
        <div key={currentQuestion.id}>
          <TestTitle>{currentQuestion.question}</TestTitle>
          <TestOptions>
            {currentQuestion.options.map((option, idx) => (
              <OptionLabel
                key={idx}
                isSelected={answers[currentQuestion.id] === option}
              >
                <OptionInput
                  type="radio"
                  name={`question${currentQuestion.id}`}
                  value={option}
                  checked={answers[currentQuestion.id] === option}
                  onChange={() => handleOptionClick(currentQuestion.id, option)}
                />
                {option}
              </OptionLabel>
            ))}
          </TestOptions>
          <NextButton onClick={handleNextClick}>
            {currentQuestionIndex < questionsData.questions.length - 1
              ? "다음 문제"
              : "결과 보기"}
          </NextButton>
        </div>
      </Wrapper>
    </div>
  );
};

export default TestPage;

const Wrapper = styled.div`
  width: 412px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: var(--beige);
`;

const ProgressBarWrapper = styled.div`
  padding: 70px 27px 16px 27px;
`;

const TestTitle = styled.div`
  height: 55px;
  font-weight: bold;
  font-size: 20px;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 85px;
`;

const TestOptions = styled.div`
  display: flex;
  height: 270px;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OptionLabel = styled.label`
  font-size: 16px;
  border: 1px solid var(--orange);
  border-radius: 25px;
  width: 357px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  border-width: ${({ isSelected }) => (isSelected ? "3px" : "1px")};
  transition: 0.3s ease;

  &:hover {
    font-weight: bold;
    border-width: 3px;
    transform: scale(1.02);
  }
`;

const OptionInput = styled.input`
  display: none; /* 라디오 버튼 숨기는 스타일 설정 */
`;

const NextButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: var(--orange);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 357px;
  height: 65px;
  margin: 113px 27px 90px 27px;
`;
