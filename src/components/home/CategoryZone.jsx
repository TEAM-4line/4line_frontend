import React from "react";
import styled from "styled-components";
import LionType from "../../images/category-lion.png";
import OwlType from "../../images/category-owl.png";
import MonkeyType from "../../images/category-monkey.png";
import CatType from "../../images/category-cat.png";
import DolphinType from "../../images/category-dolphin.png";
import FoxType from "../../images/category-fox.png";

const CategoryZone = () => {
  return (
    <div>
      <CategoryWrapper>
        <CategoryBox>
          <CategoryLeft>
            <CategoryBtn src={LionType} />
            <CategoryBtn src={DolphinType} />
            <CategoryBtn src={MonkeyType} />
          </CategoryLeft>
          <CategoryRight>
            <CategoryBtn src={CatType} />
            <CategoryBtn src={OwlType} />
            <CategoryBtn src={FoxType} />
          </CategoryRight>
        </CategoryBox>
      </CategoryWrapper>
    </div>
  );
};

export default CategoryZone;

const CategoryWrapper = styled.div`
  margin-bottom: 30px;
  padding: 0px 33px;
`;
const CategoryBox = styled.div``;

const CategoryLeft = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
`;
const CategoryRight = styled.div`
  display: flex;
  gap: 13px;
  justify-content: right;
`;
const CategoryBtn = styled.img`
  cursor: pointer;
  width: 90px;
  height: 90px;
  /* border: 1px solid var(--orange); */
`;
