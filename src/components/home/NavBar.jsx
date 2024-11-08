import React, { useState } from "react";
import styled from "styled-components";
import NavExplore from "../../images/nav-explore.svg";
import NavSpaces from "../../images/nav-spaces.svg";
import NavReviews from "../../images/nav-reviews.svg";
import NavProfile from "../../images/nav-profile.svg";

const NavBar = () => {
  const [selectedNav, setSelectedNav] = useState(0);

  function handleSelectedNav(navIndex) {
    setSelectedNav(navIndex);
  }

  const navItems = [
    { icon: NavExplore, text: "Explore" },
    { icon: NavSpaces, text: "Spaces" },
    { icon: NavReviews, text: "Reviews" },
    { icon: NavProfile, text: "Profile" },
  ];

  return (
    <NavWrapper>
      <NavList>
        {navItems.map((nav, navIndex) => (
          <NavItem
            key={navIndex}
            onClick={() => handleSelectedNav(navIndex)}
            isSelected={selectedNav === navIndex}
          >
            <IconWrapper isSelected={selectedNav === navIndex}>
              <NavIcon src={nav.icon} />
            </IconWrapper>
            {selectedNav === navIndex && <NavText>{nav.text}</NavText>}
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  width: 412px;
  /* height: 80px; */
  background-color: #f7f3ed;
  position: fixed;
  bottom: 0;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 16px;
  list-style-type: none;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #6c757d;
  cursor: pointer;
  transition: color 0.3s;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#f2dfbf" : "transparent"};
  &:hover {
    background-color: #f2dfbf;
    border-radius: 18px;
  }
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NavText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: black;
`;
