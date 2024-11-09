import React from "react";
import styled from "styled-components";
import LionType from "../../images/category-lion.svg";
import OwlType from "../../images/category-owl.svg";
import MonkeyType from "../../images/category-monkey.svg";
import CatType from "../../images/category-cat.svg";
import DolphinType from "../../images/category-dolphin.svg";
import FoxType from "../../images/category-fox.svg";

const CategoryZone = () => {
  return (
    <div>
      <CategoryWrapper>
        <CategoryBox>
          <CategoryBtn src={LionType} />
          <CategoryBtn src={OwlType} />
          <CategoryBtn src={MonkeyType} />
          <CategoryBtn src={CatType} />
          <CategoryBtn src={DolphinType} />
          <CategoryBtn src={FoxType} />
        </CategoryBox>
      </CategoryWrapper>
    </div>
  );
};

export default CategoryZone;

const CategoryWrapper = styled.div`
  height: 164px;
  margin-bottom: 30px;
`;
const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 22px;
  justify-content: center;
  align-content: center;
`;
const CategoryBtn = styled.img`
  cursor: pointer;
  margin: 0px 9px;
`;
