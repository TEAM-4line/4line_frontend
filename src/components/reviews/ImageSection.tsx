import React from "react";
import styled from "styled-components";
import axios from "axios";

interface ImageSectionProps {
  photo: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ photo }) => {
  return (
    <ImageWrapper>
      <StyledImage loading="lazy" src={photo} alt="Travel destination" />
    </ImageWrapper>
  );
};

export default ImageSection;

const ImageWrapper = styled.figure`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledImage = styled.img`
  width: 95%; // 본문보다 살짝 좁게 설정
  max-width: 400px; // ReviewCard의 max-width보다 살짝 작게
  border-radius: 12px; // 이미지 모서리를 부드럽게 처리
  object-fit: cover;
`;
