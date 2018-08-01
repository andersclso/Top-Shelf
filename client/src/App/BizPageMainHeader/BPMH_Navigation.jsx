import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  background-color: #b92214;
`;

const Navigation = styled.nav`
  width: 996px;
  margin: 0 auto;
`;

const NavIcon = styled.img`
  width: 14px;
  vertical-align: middle;
  margin-right: 8px;
`;

const NavItem = styled.a`
  padding: 5px 18px 5px 18px;
  text-decoration: none;
  color: white;
  text-weight: bolder;
  font-size: 14px;
  display: inline-block;
  border-radius: 3px;

  &:hover {
    background-color: #a92214;
  }
`;

const HomeServiceArrowIcon = styled.img`
  display: inline-block;
  width: 15px;
  height: 12px;
  vertical-align: middle;
  padding: 4px;
  margin-left: 3px;
`;

const Dot = styled.span`
  vertical-align: middle;
  color: white;
  position: relative;
  bottom: 5px;
`;

function BPMH_Navigation() {
  return (
    <NavigationWrapper>
      <Navigation>
        <NavItem className="navButton" href="#"><NavIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/carFront.png" />Auto Repair</NavItem>
        <NavItem className="navButton" href="#"><NavIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/forkKnife.png" />Restaurants</NavItem>
        <NavItem className="navButton" href="#"><NavIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/tools.png" />Home Services<HomeServiceArrowIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/downArrow.png"/></NavItem>
        <Dot>.</Dot>
        <NavItem className="navButton" href="#">Write a Review</NavItem>
        <NavItem className="navButton" href="#">Events</NavItem>
        <NavItem className="navButton" href="#">Talk</NavItem>
        <NavItem className="navButton" href="#">Collections</NavItem>
      </Navigation>
    </NavigationWrapper>
  )
}

export default BPMH_Navigation;
