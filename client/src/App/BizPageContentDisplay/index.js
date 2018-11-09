import React from 'react';
import ContentDisplayHeader from './ContentDisplayHeader.jsx';
import ContentDisplayInfoCard from './ContentDisplayInfoCard.jsx';
import ContentDisplayShowcase from './ContentDisplayShowcase.jsx';
import styled from 'styled-components';

const ContentDisplayMainWrapper = styled.div`
  width: 996px;
  margin: 0 auto;
`;

function BizPageContentDisplay(props) {

  let biz = props.businessInfo;

  return (
    <ContentDisplayMainWrapper className="content-display-main-wrapper">
      <ContentDisplayHeader
        name={ biz.name }
        claimed={ biz.claimed }
        rating={ biz.rating }
        reviewCount={ biz.review_count }
        price={ biz.price }
        category={ biz.category }
        />
      <ContentDisplayInfoCard
        address={ biz.address }
        phone={ biz.phone }
        website={ biz.website }
        email={ biz.email }
        />
      <ContentDisplayShowcase />
    </ContentDisplayMainWrapper>
  )
}

export default BizPageContentDisplay;
