import React from 'react';
import styled from 'styled-components';

const ContentDisplayHeaderWrapper = styled.div`
  width: 100wv;
  padding: 25px 0 20px 0;
`;

const ContentDisplayHeaderSecondWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px 0 15px;
  position: relative;
`

const ContentDisplayHeaderLeft = styled.div`
  height: 112px;
  min-width: 525px;
  display: inline-block;
  padding-right: 30px;
`;

const TitleBar = styled.div`
  height: 42px;
  width: 100%;
  margin-bottom: 5px;
`;

const BizName = styled.h1`
  display: inline-block;
  margin: 0 11px 0 0;
`;

const ClaimedContainer = styled.div`
  display: inline-block;
  height: 21px;
  width: 76px;
  font-size: 14px;
  text-align: right;
`;

const ClaimedIcon = styled.img`
  height: 17px;
  width: 17px;
  display: inline-block;
  float: left;
`;

const RatingBar = styled.div`
  height: 24px;
  width: 525px;
  margin-bottom: 13px;
`;

const ReviewsText = styled.span`
  position: relative;
  font-size: 16px;
  color: grey;
  bottom: 6px;
`;

const DetailsIcon = styled.img`
  height: 10px;
  width: auto;
  margin-right: 6px;
`;

const Chiclet = styled.a`
  display: inline-block;
  padding: 3px 6px 2px 6px;
  border: 1px solid silver;
  border-radius: 3px;
  position: relative;
  left: 10px;
  font-size: 12px;
  color: grey;
  cursor: pointer;

  &:hover {
    background-color: white;
    box-shadow: 1px 1px 1px silver;
    color: black;
  }
`;

const DetailsChiclet = Chiclet.extend`
  bottom: 6px;
`;

const PriceBar = styled.div`
  height: 24px;
`;
const Dot = styled.span`
  vertical-align: middle;
  color: darkgrey;
  position: relative;
  bottom: 5px;
  margin: 0 2px 0 7px;
`;

const Keyword = styled.a`
  cursor: pointer;
  color: #3498db;
  margin-left: 5px;
`;

const EditIcon = styled.img`
  height: 10px;
  width: auto;
  margin-right: 6px;
`;

const ContentDisplayActionsBar = styled.div`
  display: inline-block;
  width: 415px;
  height: 37px;
  position: absolute;
  bottom: 40%;
  cursor: pointer;
`;

const WriteReviewButton = styled.a`
  display: inline-block;
  height: 36px;
  width: 160px;
  background-color: #D32323;
  border: 1px solid #7c203a;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  font-weight: bolder;
  font-size: 14px;
  padding: 7px 18px 7px 18px;
  box-shadow: 1px 1px 1px silver;

  &:hover {
    background-color: #f33535;
  }
`;

const WriteReviewButtonText = styled.span`
  position: relative;
  bottom: 3px;
`;

const StarIcon = styled.img`
  height: auto;
  width: 18px;
  display: inline-block;
  margin-right: 8px;
`;

const ActionsThreeActionContainer = styled.div`
  display: inline-block;
  float: right;
  position: relative;
  top: 4px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
`;

const ActionButtonTemplate = styled.a`
  display: inline-block;
  padding: 4px 10px 4px 10px;
  border: 1px solid silver;
  font-size: 12px;
  font-weight: bolder;
  color: grey;
  background-color: f7f7f7;

  &:hover {
    background-color: white;
  }
`;

const AddPhotoButton = ActionButtonTemplate.extend`
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const ShareButton = ActionButtonTemplate.extend`

`;

const SaveButton = ActionButtonTemplate.extend`
  border-left: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const ActionIcon = styled.img`
  width: 16px;
  height: auto;
  margin-right: 5px;
`;

const ActionTextWrapper = styled.span`
  position: relative;
  bottom: 3px;
`;

function ContentDisplayHeader(props) {

  let biz_price = () => {
    let dollar_signs = '';
    let price = props.price;

    for (let i = 0; i < price; i++) {
      dollar_signs += '$';
    }

    return dollar_signs;
  }

  let biz_rating = () => {
    let rating = '' + props.rating;
    let link;

    switch(rating) {
      case '0':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/0.png';
        break;
      case '1.5':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/1.png';
        break;
      case '1.5':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/1_half.png';
        break;
      case '2':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/2.png';
        break;
      case '2.5':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/2_half.png';
        break;
      case '3':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/3.png';
        break;
      case '3.5':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/3_half.png';
        break;
      case '4':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/4.png';
        break;
      case '4.5':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/4_half.png';
        break;
      case '5':
        link = 'https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/stars/5.png';
        break;
    }

    const Stars = styled.div`
      display: inline-block;
      height: 24px;
      width: 132px;
      background-image: url('${link}');
      background-size: contain;
      margin-right: 7px;
    `;

    return (<Stars/>);
  }

  return (
    <ContentDisplayHeaderWrapper className="content-display-header-wrapper">
      <ContentDisplayHeaderSecondWrapper className="content-display-header-second-wrapper">
        <ContentDisplayHeaderLeft className="content-display-header-left">
          <TitleBar className="title-bar">
            <BizName className="biz-name">{props.name}</BizName>

            { props.claimed && (
              <ClaimedContainer className="claimed-tag-container">
                <ClaimedIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/claimedCheck.png"/>
                Claimed
              </ClaimedContainer>
            )}

          </TitleBar>
          <RatingBar className="rating-bar">
            { biz_rating() }
            <ReviewsText>
              {props.reviewCount} reviews
            </ReviewsText>
            <DetailsChiclet className="details-chiclet">
              <DetailsIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/coverage-level.png"/>
              Details
            </DetailsChiclet>
          </RatingBar>
          <PriceBar className="price-bar">
            <span>
              { biz_price() }
            </span>
            <Dot>.</Dot>
            <span className="biz-keywords">
              <Keyword>Japanese</Keyword>,
              <Keyword>Tapas/Small Plates</Keyword>,
              <Keyword>Pubs</Keyword>
            </span>
            <Chiclet className="edit-chiclet">
              <EditIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/pencil-edit-button.png"/>
              Edit
            </Chiclet>
          </PriceBar>
        </ContentDisplayHeaderLeft>
        <ContentDisplayActionsBar className="content-display-actions-bar">
          <WriteReviewButton className="write-review-button">
            <StarIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/star.png"/>
            <WriteReviewButtonText>
              Write a Review
            </WriteReviewButtonText>
          </WriteReviewButton>
          <ActionsThreeActionContainer className="three-actions-container">
            <AddPhotoButton className="add-photo-button">
              <ActionIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/photo-camera.png"/>
              <ActionTextWrapper>
                Add Photo
              </ActionTextWrapper>
            </AddPhotoButton>
            <ShareButton className="share-button">
              <ActionIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/share-symbol.png"/>
              <ActionTextWrapper>
                Share
              </ActionTextWrapper>
            </ShareButton>
            <SaveButton className="save-button">
              <ActionIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/bookmark-ribbon.png"/>
              <ActionTextWrapper>
                Save
              </ActionTextWrapper>
            </SaveButton>
          </ActionsThreeActionContainer>
        </ContentDisplayActionsBar>
      </ContentDisplayHeaderSecondWrapper>
    </ContentDisplayHeaderWrapper>
  )
}

export default ContentDisplayHeader;
