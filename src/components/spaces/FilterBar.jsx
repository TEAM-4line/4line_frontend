import React, { useState } from "react";
import styled from "styled-components";

const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilter = (btnId) => {
    if (selectedFilter !== btnId) {
      setSelectedFilter(btnId);
    }
  };

  return (
    <div>
      <FilterBarWrapper>
        <FilterBox>
          <Top>
            <FilterBtn
              onClick={() => handleFilter("lion")}
              isSelected={selectedFilter === "lion"}
            >
              🦁
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("dolphin")}
              isSelected={selectedFilter === "dolphin"}
            >
              🐬
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("monkey")}
              isSelected={selectedFilter === "monkey"}
            >
              🐵
            </FilterBtn>
          </Top>
          <Bottom>
            <FilterBtn
              onClick={() => handleFilter("cat")}
              isSelected={selectedFilter === "cat"}
            >
              😺
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("owl")}
              isSelected={selectedFilter === "owl"}
            >
              🦉
            </FilterBtn>
            <FilterBtn
              onClick={() => handleFilter("fox")}
              isSelected={selectedFilter === "fox"}
            >
              🦊
            </FilterBtn>
          </Bottom>
        </FilterBox>
      </FilterBarWrapper>
    </div>
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
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 155, 41, 0.28);
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FilterBtn = styled.button`
  font-size: 40px;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--orange)" : "transparent"};
  padding: 7px 48px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "var(--orange)" : "rgba(255, 155, 41, 0.2)"};
  }
`;
