import React, { useState } from "react";
import styled from "styled-components";

interface ReviewFilterProps {
  onSearch: (filters: {
    trip_time: string;
    trip_timeUnit: string;
    cost: string;
    costUnit: string;
    region: string;
  }) => void;
}

const ReviewFilter: React.FC<ReviewFilterProps> = ({ onSearch }) => {
  // 상태 정의
  const [trip_time, setTrip_time] = useState("");
  const [trip_timeUnit, setTrip_timeUnit] = useState("week");
  const [cost, setCost] = useState("");
  const [costUnit, setCostUnit] = useState("KRW per day");
  const [region, setRegion] = useState("");

  const [showFilter, setShowFilter] = useState(false); // 필터 표시 여부 상태

  const trip_timeOptions = ["일", "주", "개월"];
  const costOptions = ["원(₩)", "달러($)"];
  const regionOptions = [
    "아시아",
    "남아메리카",
    "북아메리카",
    "유럽",
    "아프리카",
    "호주",
  ];

  // 검색 핸들러
  const handleSearch = () => {
    // 상위 컴포넌트에 필터 데이터 전달
    onSearch({ trip_time, trip_timeUnit, cost, costUnit, region });
  };

  return (
    <FilterContainer>
      {/* 검색 창과 필터 버튼 */}
      <SearchWrapper>
        {/* 검색 아이콘 및 입력란 */}
        <SearchInputWrapper>
          <SearchIcon src="/images/search.png" alt="Search Icon" />
          <SearchInput type="text" placeholder=" 검색어를 입력하세요" />
        </SearchInputWrapper>
        {/* 필터 버튼 (아이콘으로 대체) */}
        <FilterButton onClick={() => setShowFilter(!showFilter)}>
          <FilterIcon src="/images/filter.png" alt="Filter Icon" />
        </FilterButton>
      </SearchWrapper>

      {/* 필터 조건 - 필터 버튼 클릭 시 표시 */}
      {showFilter && (
        <FilterSection>
          <FilterItem>
            <label>여행 기간</label>
            <InputGroup>
              <FilterInput
                type="text"
                value={trip_time}
                onChange={(e) => setTrip_time(e.target.value)}
                placeholder="예) 1"
              />
              <FilterSelect
                value={trip_timeUnit}
                onChange={(e) => setTrip_timeUnit(e.target.value)}
              >
                {trip_timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FilterSelect>
            </InputGroup>
          </FilterItem>
          <FilterItem>
            <label>비용</label>
            <InputGroup>
              <FilterInput
                type="text"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="예) 50,000"
              />
              <FilterSelect
                value={costUnit}
                onChange={(e) => setCostUnit(e.target.value)}
              >
                {costOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FilterSelect>
            </InputGroup>
          </FilterItem>
          <FilterItem>
            <label>지역</label>
            <FilterSelect
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">지역을 선택하세요</option>
              {regionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </FilterSelect>
          </FilterItem>
          <ButtonWrapper>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </ButtonWrapper>
        </FilterSection>
      )}
    </FilterContainer>
  );
};

export default ReviewFilter;

// Styled Components
const FilterContainer = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f3f5;
  padding: 0.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  border-radius: 10px 0 0 10px;
  outline: none;
  height: 40px;
`;

const FilterButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 0.5rem;
  padding-right: 0.7rem;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  outline: none;
`;

const FilterSection = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #444;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FilterInput = styled.input`
  flex: 2;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const FilterSelect = styled.select`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 0.75rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1; // 입력란이 전체 너비를 차지할 수 있도록 설정
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem; // 아이콘과 입력란 사이의 간격
`;

const FilterIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
