import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LionType from "../../images/category-lion.png";
import OwlType from "../../images/category-owl.png";
import MonkeyType from "../../images/category-monkey.png";
import CatType from "../../images/category-cat.png";
import DolphinType from "../../images/category-dolphin.png";
import FoxType from "../../images/category-fox.png";

const CategoryBar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (filterType) => {
    navigate(`/spaces?filter=${filterType}`);
  };

  return (
    <CategoryWrapper>
      <CategoryBox>
        <CategoryLeft>
          <CategoryBtn
            src={LionType}
            onClick={() => handleCategoryClick("lion")}
          />
          <CategoryBtn
            src={DolphinType}
            onClick={() => handleCategoryClick("dolphin")}
          />
          <CategoryBtn
            src={MonkeyType}
            onClick={() => handleCategoryClick("monkey")}
          />
        </CategoryLeft>
        <CategoryRight>
          <CategoryBtn
            src={CatType}
            onClick={() => handleCategoryClick("cat")}
          />
          <CategoryBtn
            src={OwlType}
            onClick={() => handleCategoryClick("owl")}
          />
          <CategoryBtn
            src={FoxType}
            onClick={() => handleCategoryClick("fox")}
          />
        </CategoryRight>
      </CategoryBox>
    </CategoryWrapper>
  );
};

export default CategoryBar;

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
`;
