import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TypeIcon from "../../images/icon-type.svg";
import BookmarkIcon from "../../images/icon-bookmark.svg";
import TripsIcon from "../../images/icon-trips.svg";

const MenuBox = () => {
  return (
    <MenuWrapper>
      <MenuItem to="/test" style={{ borderBottom: "1px solid #F7F7F9" }}>
        <Icon src={TypeIcon} alt="Traveler Type Icon" />
        <MenuText>Traveler type</MenuText>
        <Arrow>&#8250;</Arrow>
      </MenuItem>
      <MenuItem to="/bookmarked" style={{ borderBottom: "1px solid #F7F7F9" }}>
        <Icon src={BookmarkIcon} alt="Bookmark Icon" />
        <MenuText>Bookmarked</MenuText>
        <Arrow>&#8250;</Arrow>
      </MenuItem>
      <MenuItem to="/previous-trips">
        <Icon src={TripsIcon} alt="Trips Icon" />
        <MenuText>Previous Trips</MenuText>
        <Arrow>&#8250;</Arrow>
      </MenuItem>
    </MenuWrapper>
  );
};

export default MenuBox;

const MenuWrapper = styled.div`
  width: 369px;
  display: flex;
  flex-direction: column;
  margin: 22px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
`;

const MenuText = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

const Arrow = styled.span`
  font-size: 24px;
  color: #7d848d;
`;
