import React from 'react';
import styled from 'styled-components';

const ShowcaseWrapper = styled.div`
  display: inline-block;
  height: 355px;
  width: 660px;
  position: relative;
  top: 12px;
`;

const ShowcaseTable = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 355px;
  width: 660px;
`;

const Showcase = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  display: inline-grid;
  grid-template-columns: 33% 33% 33%;
`;

const ShowAllWrapper = styled.div`
  width: 100%;
  float: right;
`;

const ShowAllButton = styled.a`
  cursor: pointer;
  float: right;
  text-decoration: none;
  color: #3498db;
`;

const ShowAllIcon = styled.img`
  height: auto;
  width: 14px;
  display: inline-block;
  position: relative;
  top: 3px;
`;

const ShowAllText = styled.span`
  margin-left: 7px;
  font-size: 14px;
`;

const LeftImage = styled.img`
  content: url("https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/kinka1.jpg");
  height: 220px;
  width: auto;
`;

const CenterImage = styled.img`
  content: url("https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/kinka2.jpg");
  z-index: 1;
  height: 220px;
  width: auto;
`;

const RightImage = styled.img`
  content: url("https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/kinka3.jpg");
  height: 220px;
  width: auto;
`;

function ContentDisplayShowcase(props) {

  let testPhotos = [LeftImage, CenterImage, RightImage];

  return (
    <ShowcaseWrapper className="showcase-wrapper">
      <ShowcaseTable className="showcase-table">
        <Showcase className="showcase">
          <LeftImage/>
          <CenterImage/>
          <RightImage/>
        </Showcase>
        <ShowAllWrapper className="show-all-wrapper">
          <ShowAllButton href="#" className="show-all-button">
            <ShowAllIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/view-all.png"/>
            <ShowAllText className="show-all-text">
              See all 729
            </ShowAllText>
          </ShowAllButton>
        </ShowAllWrapper>
      </ShowcaseTable>
    </ShowcaseWrapper>
  )
}

export default ContentDisplayShowcase;
