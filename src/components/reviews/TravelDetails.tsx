import React from 'react';
import styled from 'styled-components';

interface TravelDetailsProps {
  duration: string;
  cost: string;
  region: string;
  rating: string;
  description: string;
}

const TravelDetails: React.FC<TravelDetailsProps> = ({
  duration,
  cost,
  region,
  rating,
  description
}) => {
  return (
    <DetailsSection>
      {/* 여행 기간 */}
      <DetailRow>
        <Label># 여행기간</Label>
        <Content>{duration}</Content>
      </DetailRow>

      {/* 비용 */}
      <DetailRow>
        <Label># 비용</Label>
        <Content>{cost}</Content>
      </DetailRow>

      {/* 지역 */}
      <DetailRow>
        <Label># 지역</Label>
        <Content>{region}</Content>
      </DetailRow>

      {/* 별점 */}
      <DetailRow>
        <Label># 별점</Label>
        <Content>{rating}</Content>
      </DetailRow>

      {/* 설명 */}
      <Description>{description}</Description>
    </DetailsSection>
  );
};

export default TravelDetails;

// Styled Components
const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  font-size: 0.9rem; // 이미지에서 보여준 크기에 맞게 약간 더 큰 크기로 변경
  color: #333; // 좀 더 부드러운 색으로 변경
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem; // 각 항목 간의 간격을 위해 여백 추가
`;

const Label = styled.span`
  min-width: 80px; // 레이블 너비 고정으로 수직 정렬을 맞추기
  color: #888; // 회색으로 설정하여 덜 돋보이게
  font-weight: 500; // 레이블 가독성을 위한 조금 두꺼운 폰트
`;

const Content = styled.span`
  font-weight: 300; // 콘텐츠의 가독성을 높이기 위해 두껍게
  color: #000; // 내용 부분은 진한 검정으로 강조
`;

const Description = styled.p`
  margin-top: 1.25rem;
  line-height: 1.6; // 줄 간격을 여유 있게
  font-size: 0.95rem; // 설명은 기본 폰트 크기보다 약간 더 크게
  color: #444; // 좀 더 부드러운 진한 색상
`;
