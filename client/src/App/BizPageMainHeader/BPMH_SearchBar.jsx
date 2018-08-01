import React from 'react';
import styled from 'styled-components';

const MainHeaderWrapper = styled.div`
  width: 100%;
  background: #d32323;
  padding: 12px 0px 12px 0px;
`;

const MainHeaderBar = styled.div`
  width: 996px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

const YelpLogo = styled.img`
  display: inline-block;
  width: 80px;
  height: 40px;
  vertical-align: middle;
`;

const SearchBarForm = styled.form`
  display: inline-block;
`;


const FindBarWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 36px;
  width: 325px;
  padding: 8px 12px 8px 12px;
  background-color: white;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const NearBarWrapper = styled.div`
  display: inline-block;
  height: 36px;
  width: 325px;
  padding: 8px 12px 8px 12px;
  background-color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const SearchButtonIcon = styled.img`
  width: 24px;
  height: auto;
  vertical-align: middle;
`;

const SearchButton = styled.button`
  position: relative;
  background-color: #b92214;
  width: 54px;
  height: 36px;
  border: none;
  border-radius: 3px;
  bottom: 2px;

  &:hover {
    background-color: #a92214;
  }
`;

const Input = styled.input`
  width: 264px;
  height: 20px;
  border: none;
  font-size: 14px;
`;

const FindNearTitle = styled.span`
  font-weight: bolder;
  font-size: 15px;
  margin-right: 4px;
`;

const SearchBarNavIconWrapper = styled.a`
  display: inline-block;
  height: 36px;
  width: 36px;
  padding: 9px;
  vertical-align: middle;
  border-radius: 3px;

  &:hover {
    background-color: #a92214;
  }
`;

const SearchBarNavIcon = styled.img`
  height: 100%;
  width: auto;
`;

const ProfileButton = styled.a`
  background-color: #b92214;
  border-radius: 3px;
  display: inline-block;
  height: 36px;
  width: 58px;
  vertical-align: middle;

  &:hover {
    background-color: #a92214;
  }
`;

const ProfileButtonPhoto = styled.img`
  display: inline-block;
  float: left;
  height: 36px;
  width: 36px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const DownArrowWrapper = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  padding: 4px;
  margin-left: 3px;
`;

const DownArrowIcon = styled.img`
  width: 100%;
  height: auto;
`;

function BPMH_SearchBar(props) {

  return (
    <MainHeaderWrapper>
      <MainHeaderBar>
        <a href="https://www.yelp.com"><YelpLogo src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/Yelp_trademark_RGB.png"/></a>
        <SearchBarForm>
          <FindBarWrapper className="find-bar-wrapper">
            <FindNearTitle className="find-title">Find</FindNearTitle>
            <Input name="find-input" placeholder="auto repair, burgers, spas..."/>
          </FindBarWrapper>
          <NearBarWrapper className="near-bar-wrapper">
            <FindNearTitle className="near-title">Near</FindNearTitle>
            <Input name="near-input" placeholder="Current Location"/>
          </NearBarWrapper>
          <SearchButton className="navButton" type="submit" form="searchBarForm">
            <SearchButtonIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/searchIcon.png"/>
          </SearchButton>
        </SearchBarForm>
        <SearchBarNavIconWrapper className="navButton" href="#" onMouseEnter={props.navHighlighter}><SearchBarNavIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/yelpMsg.png"/></SearchBarNavIconWrapper>
        <SearchBarNavIconWrapper className="navButton" href="#" onMouseEnter={props.navHighlighter}><SearchBarNavIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/yelpBell.png"/></SearchBarNavIconWrapper>
        <ProfileButton className="navButton" href="#" onMouseEnter={props.navHighlighter}>
          <ProfileButtonPhoto src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/28488545.jpeg"/>
          <DownArrowWrapper className="down-arrow-wrapper">
            <DownArrowIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/downArrow.png"/>
          </DownArrowWrapper>
        </ProfileButton>
      </MainHeaderBar>
    </MainHeaderWrapper>
  )
}

export default BPMH_SearchBar;
