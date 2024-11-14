import React from "react";
import styled from "styled-components";
import resultLion from "../../images/result-lion.png";
import resultOwl from "../../images/result-owl.png";
import resultMonkey from "../../images/result-monkey.png";
import resultCat from "../../images/result-cat.png";
import resultDolphin from "../../images/result-dolphin.png";
import resultFox from "../../images/result-fox.png";

const ResultDescription = ({ type }) => {
  const typearray = [
    {
      id: "lion",
      description: "넓은 세상을 탐험하며\n자신만의 길을 만드는.",
      highlight: "용맹한 모험가",
      animal: "사자",
      typeImage: resultLion,
    },
    {
      id: "owl",
      description: "세밀하게 세상을 관찰하고\n철저하게 계획을 세우는.",
      highlight: "섬세한 계획자",
      animal: "부엉이",
      typeImage: resultOwl,
    },
    {
      id: "monkey",
      description: "자유롭고 즉흥적인 성격으로\n순간의 즐거움을 놓치지 않는.",
      highlight: "즉흥적인 자유인",
      animal: "원숭이",
      typeImage: resultMonkey,
    },
    {
      id: "cat",
      description: "편안하고 여유로운 태도로\n여행에서의 휴식을 중요시하는.",
      highlight: "편안한 휴식가",
      animal: "고양이",
      typeImage: resultCat,
    },
    {
      id: "dolphin",
      description: "사람들과의 관계를 중시하며\n타인의 기쁨을 함께 나누는.",
      highlight: "사교적인 리더",
      animal: "돌고래",
      typeImage: resultDolphin,
    },
    {
      id: "fox",
      description: "날카로운 감각으로\n세상에 대한 호기심이 가득한.",
      highlight: "호기심 많은 탐험가",
      animal: "여우",
      typeImage: resultFox,
    },
  ];

  const result = typearray.find((item) => item.id === type);

  return (
    <Wrapper>
      {result ? (
        <>
          <Description>{result.description}</Description>
          <TypeName>
            당신은
            <br />
            <span>{result.highlight}</span>
            <br />
            <span>{result.animal}</span> 이군요!
          </TypeName>
          <TypeImg src={result.typeImage} />
        </>
      ) : (
        <p>유효하지 않은 타입입니다.</p>
      )}
    </Wrapper>
  );
};

export default ResultDescription;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const Description = styled.div`
  font-size: 16px;
  white-space: pre-line;
  text-align: center;
  color: var(--brown);
  text-decoration: underline;
  font-weight: 500;
`;

const TypeName = styled.div`
  font-size: 32px;
  white-space: pre-line;
  text-align: center;
  color: var(--brown);
  margin-bottom: 52px;
  font-weight: 500;
  span {
    font-weight: 800;
  }
`;

const TypeImg = styled.img`
  width: 357px;
  height: 357px;
`;
