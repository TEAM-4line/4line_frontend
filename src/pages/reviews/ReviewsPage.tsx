import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReviewFilter from '../../components/reviews/ReviewFilter';
import TopBar from '../../components/home/TopBar';
import NavBar from '../../components/home/NavBar';
import WriteBtn from "../../images/write-btn.png";
import axios from 'axios';

const ReviewsPage: React.FC = () => {
  const Server_IP = process.env.REACT_APP_Server_IP; // 환경 변수에서 서버 IP 가져오기
  const navigate = useNavigate();

  // 상태 정의
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filterData, setFilterData] = useState({
    duration: '',
    cost: '',
    region: ''
  });

  // 필터링 조건을 사용하여 백엔드 API 호출
  const handleSearch = async (filters: { duration: string; durationUnit: string; cost: string; costUnit: string; region: string }) => {
    setLoading(true);
    setError(null);

    // 빈 필터를 제외한 유효한 필터만 추가
    const params: any = {};
    if (filters.duration) params.trip_time = `${filters.duration}${filters.durationUnit}`;
    if (filters.cost) params.cost = `${filters.cost}`;
    if (filters.region) params.region = filters.region;

    try {
        const response = await axios.get(`${Server_IP}/api/community/post`, {
          params: params,
      });

      // 필터링된 결과를 상태로 설정 후 페이지 이동
      console.log("Navigating to results page...");
      navigate('/reviews/result', {
          state: {
              filteredPosts: response.data,
              loading: false,
              error: null,
          },
      });
  } catch (err) {
      console.error('게시글 필터링 실패:', err);
      setError('게시글을 불러오는 데 실패했습니다. 나중에 다시 시도해주세요.');
  } finally {
      setLoading(false);
  }
};

return (
    <PageWrapper>
      <TopBarContainer>
        <TopBar PageName={"Reviews"} userImg={"/images/sample-profile.svg"} />
      </TopBarContainer>
      <ContentWrapper>
        {/* 필터링 컴포넌트 */}
        <FilterSection>
          <ReviewFilter onSearch={handleSearch} />
        </FilterSection>
      </ContentWrapper>
      <NavBarContainer>
        <NavBar pageName="reviews"/>
      </NavBarContainer>
      <BtnBox>
        <Write
          src={WriteBtn}
          alt="write button"
          onClick={() => navigate("/reviews/new_review")}
        />
      </BtnBox>
    </PageWrapper>
  );
};

export default ReviewsPage;

// Styled Components
const PageWrapper = styled.div`
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
  padding-top: 90px;
  padding-bottom: 70px;
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

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const FloatingButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 90px; // NavBar 위에 떠 있도록 설정
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #ffc107; // 노란색
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #ffb300;
  }
`;

const BtnBox = styled.div`
  position: fixed;
  bottom: 90px;
  right: 180px;
`;

const Write = styled.img`
  width: 66px;
  height: 66px;
  cursor: pointer;
`;
