import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReviewFilter from '../../components/reviews/ReviewFilter';
import TopBar from '../../components/home/TopBar';
import NavBar from '../../components/home/NavBar';
import axios from 'axios';

const ReviewsPage: React.FC = () => {
  const Server_IP = process.env.REACT_APP_Server_IP; // 환경 변수에서 서버 IP 가져오기
  const navigate = useNavigate();

  // 상태 정의
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 필터링 조건을 사용하여 백엔드 API 호출
  const handleSearch = async (filterData: { duration: string; cost: string; region: string }) => {
    setLoading(true);
    setError(null);

    try {
        // 백엔드 API 요청 - 올바른 경로로 수정
        const response = await axios.get(`${Server_IP}/post`, {
            params: {
                trip_time: filterData.duration, // 필터링 조건 전달
                cost: filterData.cost,
                region: filterData.region,
            },
        });

        // 필터링된 결과를 상태로 설정 후 ReviewsResult로 이동
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
        <NavBar />
      </NavBarContainer>
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
