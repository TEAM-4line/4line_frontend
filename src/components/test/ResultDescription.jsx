import React from "react";
import styled from "styled-components";
import resultLion from "../../images/result-lion.png";
import resultOwl from "../../images/result-owl.png";
import resultMonkey from "../../images/result-monkey.png";
import resultCat from "../../images/result-cat.png";
import resultDolphin from "../../images/result-dolphin.png";
import resultFox from "../../images/result-fox.png";

const ResultDescription = ({ userType }) => {
  const typearray = [
    {
      id: "lion",
      description: "넓은 세상을 탐험하며\n자신만의 길을 만드는.",
      type: "당신은\n용맹한 모험가\n사자 이군요!",
      image: resultLion,
    },
    {
      id: "owl",
      description: "세밀하게 세상을 관찰하고\n철저하게 계획을 세우는.",
      type: "당신은\n섬세한 계획자\n부엉이 이군요!",
      image: resultOwl,
    },
    {
      id: "monkey",
      description: "자유롭고 즉흥적인 성격으로\n순간의 즐거움을 놓치지 않는.",
      type: "당신은\n즉흥적인 자유인\n원숭이 이군요!",
      image: resultMonkey,
    },
    {
      id: "cat",
      description: "편안하고 여유로운 태도로\n여행에서의 휴식을 중요시하는.",
      type: "당신은\n편안한 휴식가\n고양이 이군요!",
      image: resultCat,
    },
    {
      id: "dolphin",
      description: "사람들과의 관계를 중시하며\n타인의 기쁨을 함께 나누는.",
      type: "당신은\n사교적인 리더\n돌고래 이군요!",
      image: resultDolphin,
    },
    {
      id: "fox",
      description: "날카로운 감각으로\n세상에 대한 호기심이 가득한.",
      type: "당신은\n호기심 많은 탐험가\n여우 이군요!",
      image: resultFox,
    },
  ];

  const result = typearray.find((item) => item.id === userType);

  return (
    <Wrapper>
      {result ? (
        <>
          <Description>{result.description}</Description>
          <Type>{result.type}</Type>
          <Image>{result.image}</Image>
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
`;

const Type = styled.div`
  font-size: 32px;
`;

const Image = styled.img`
  width: 357px;
  height: 357px;
`;
