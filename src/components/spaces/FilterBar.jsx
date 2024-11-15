import React from "react";
import styled from "styled-components";

const FilterBar = ({ selectedFilter, onFilterSelect }) => {
  return (
    <FilterBarWrapper>
      <FilterBox>
        <Top>
          <FilterBtn
            onClick={() => onFilterSelect("lion")}
            $isSelected={selectedFilter === "lion"}
          >
            🦁
          </FilterBtn>
          <FilterBtn
            onClick={() => onFilterSelect("dolphin")}
            $isSelected={selectedFilter === "dolphin"}
          >
            🐬
          </FilterBtn>
          <FilterBtn
            onClick={() => onFilterSelect("monkey")}
            $isSelected={selectedFilter === "monkey"}
          >
            🐵
          </FilterBtn>
        </Top>
        <Bottom>
          <FilterBtn
            onClick={() => onFilterSelect("cat")}
            $isSelected={selectedFilter === "cat"}
          >
            😺
          </FilterBtn>
          <FilterBtn
            onClick={() => onFilterSelect("owl")}
            $isSelected={selectedFilter === "owl"}
          >
            🦉
          </FilterBtn>
          <FilterBtn
            onClick={() => onFilterSelect("fox")}
            $isSelected={selectedFilter === "fox"}
          >
            🦊
          </FilterBtn>
        </Bottom>
      </FilterBox>
    </FilterBarWrapper>
  );
};

export default FilterBar;

const FilterBarWrapper = styled.div`
  width: 412px;
  height: 125px;
  position: fixed;
`;

const FilterBox = styled.div`
  background-color: #fff7f0;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 155, 41, 0.28);
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterBtn = styled.button`
  font-size: 40px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--orange)" : "transparent"};
  padding: 7px 48px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "var(--orange)" : "rgba(255, 155, 41, 0.2)"};
  }
`;
