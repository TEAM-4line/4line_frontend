import React, { useState } from 'react';
import styled from 'styled-components';

interface ReviewFilterProps {
  onSearch: (filters: { duration: string; durationUnit: string; cost: string; costUnit: string; region: string }) => void;
}

const ReviewFilter: React.FC<ReviewFilterProps> = ({ onSearch }) => {
  // 상태 정의
  const [duration, setDuration] = useState('');
  const [durationUnit, setDurationUnit] = useState('week');
  const [cost, setCost] = useState('');
  const [costUnit, setCostUnit] = useState('KRW per day');
  const [region, setRegion] = useState('');

  const [showFilter, setShowFilter] = useState(false); // 필터 표시 여부 상태

  const durationOptions = ['day', 'week', 'month'];
  const costOptions = ['KRW per day', 'USD per day'];
  const regionOptions = ['Asia', 'South America', 'North America', 'Europe', 'Africa', 'Australia'];

  // 검색 핸들러
  const handleSearch = () => {
    onSearch({ duration, durationUnit, cost, costUnit, region });
  };

  return (
    <FilterContainer>
      {/* 검색 창과 필터 버튼 */}
      <SearchWrapper>
        {/* 검색 아이콘 및 입력란 */}
        <SearchInputWrapper>
        <SearchIcon src="/images/search.png" alt="Search Icon" />
        <SearchInput type="text" placeholder="Search for reviews..." />
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
            <label>Duration</label>
            <InputGroup>
              <FilterInput
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 1"
              />
              <FilterSelect value={durationUnit} onChange={(e) => setDurationUnit(e.target.value)}>
                {durationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FilterSelect>
            </InputGroup>
          </FilterItem>
          <FilterItem>
            <label>Cost</label>
            <InputGroup>
              <FilterInput
                type="text"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="e.g., 50,000"
              />
              <FilterSelect value={costUnit} onChange={(e) => setCostUnit(e.target.value)}>
                {costOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FilterSelect>
            </InputGroup>
          </FilterItem>
          <FilterItem>
            <label>Region</label>
            <FilterSelect value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="">Select Region</option>
              {regionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </FilterSelect>
          </FilterItem>
          <SearchButton onClick={handleSearch}>Search</SearchButton>
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
`;

const FilterButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 0.5rem;
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
  width: 15px;
  height: 12.5px;
`;
