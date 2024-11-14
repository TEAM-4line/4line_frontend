import React from "react";
import styled from "styled-components";
import TypeLion from "../../images/type-lion.png";
import TypeOwl from "../../images/type-owl.png";
import TypeMonkey from "../../images/type-monkey.png";
import TypeCat from "../../images/type-cat.png";
import TypeDolphin from "../../images/type-dolphin.png";
import TypeFox from "../../images/type-fox.png";

const TypeImg = ({ type }) => {
  if (type === "lion") {
    return (
      <div>
        <AnimalImg src={TypeLion} />
      </div>
    );
  } else if (type === "owl") {
    return (
      <div>
        <AnimalImg src={TypeOwl} />
      </div>
    );
  } else if (type === "monkey") {
    return (
      <div>
        <AnimalImg src={TypeMonkey} />
      </div>
    );
  } else if (type === "cat") {
    return (
      <div>
        <AnimalImg src={TypeCat} />
      </div>
    );
  } else if (type === "dolphin") {
    return (
      <div>
        <AnimalImg src={TypeDolphin} />
      </div>
    );
  } else if (type === "fox") {
    return (
      <div>
        <AnimalImg src={TypeFox} />
      </div>
    );
  }
  return (
    <div>
      <p>존재하지 않는 유형입니다.</p>
    </div>
  );
};

export default TypeImg;

const AnimalImg = styled.img`
  height: 164px;
  border-radius: 100px;
`;
