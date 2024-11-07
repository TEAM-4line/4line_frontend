import React, { useState } from "react";
import styled from "styled-components";

const TestPage = () => {
  const questions = [
    {
      id: 1,
      question: "평소 나의 여행 모습은?",
      options: [
        "아침 일찍 일출 보고\n조식까지 야무지게 먹어줌",
        "아침은 푹 쉬다가\n체크아웃 시각에 맞춰서 나가자!",
        "조식 먹고 조금 쉬다가\n여유롭게 체크아웃 GOGO",
      ],
    },
    {
      id: 2,
      question: "이제 출발하려고 합니다.\n무엇을 타고 갈까요?",
      options: [
        "운전은 피곤해.\n대중교통 타고 가자",
        "차가 있어야 편하지!\n운전해서 가자",
      ],
    },
  ];

  const [answers, setAnswers] = useState({});

  const handleOptionClick = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  return (
    <div>
      <Wrapper>
        {questions.map((question) => (
          <div key={question.id}>
            <TestTitle>{question.question}</TestTitle>
            <TestOptions>
              {question.options.map((option, idx) => (
                <Option
                  key={idx}
                  onClick={() => handleOptionClick(question.id, option)}
                  isSelected={answers[question.id] === option}
                >
                  {option}
                </Option>
              ))}
            </TestOptions>
            <NextButton>다음</NextButton>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default TestPage;

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: var(--beige);
`;

const TestTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  white-space: pre-line;
`;

const TestOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Option = styled.div`
  font-size: 18px;
  border: 1px solid var(--orange);
  border-radius: 25px;
  width: 520px;
  height: 77px;
  text-align: center;
  padding: 15px;
  white-space: pre-line;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  border-width: ${({ isSelected }) => (isSelected ? "3px" : "1px")};
  &:hover {
    font-weight: bold;
    border: 3px solid var(--orange);
    transition: 0.3s ease-in-out;
  }
`;

const NextButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: var(--orange);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 520px;
  height: 63px;
  margin: 205px 40px 60px 40px;
`;
