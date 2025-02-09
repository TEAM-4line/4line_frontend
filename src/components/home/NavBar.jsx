import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavExplore from "../../images/nav-explore.svg";
import NavSpaces from "../../images/nav-spaces.svg";
import NavReviews from "../../images/nav-reviews.svg";
import NavProfile from "../../images/nav-profile.svg";

const NavBar = ({ pageName }) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const navItems = [
    { icon: NavExplore, text: "Explore", path: "/home", keyword: "home" },
    { icon: NavSpaces, text: "Spaces", path: "/spaces", keyword: "spaces" },
    { icon: NavReviews, text: "Reviews", path: "/reviews", keyword: "reviews" },
    {
      icon: NavProfile,
      text: "Profile",
      path: `/profile/${name}`,
      keyword: "profile",
    },
  ];

  return (
    <NavWrapper>
      <NavList>
        {navItems.map((nav, index) => (
          <NavItem
            key={nav.keyword}
            onClick={() => navigate(nav.path)}
            $isSelected={pageName === nav.keyword}
          >
            <IconWrapper $isSelected={pageName === nav.keyword}>
              <NavIcon src={nav.icon} />
            </IconWrapper>
            {pageName === nav.keyword && <NavText>{nav.text}</NavText>}
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 412px;
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
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#f2dfbf" : "transparent"};
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
