import React from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
  height: 355px;
  width: 300px;
  z-index: 1;
  display: inline-block;
  padding: 5px;
  margin-left: 15px;
  border: 1px solid silver;
  background-color: white;
`;

const Map = styled.img`
  width: 286px;
  height: 135px;
  border: 1px solid silver;
`;

const BusinessContactWrapper = styled.div`
  height: 196px;
  width: 288px;
  font-size: 14px;
  color: #696969;
  padding: 5px;
`;

const BusinessContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const AddressList = styled.li`
  margin-bottom: 4px;
`;

const AddressListRelative = AddressList.extend`
  position: relative;
`;

const AddressIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: auto;
  width: 15px;
  display: inline-block;
  margin-right: 6px;
`;
const BusinessAddress = styled.address`
  display: inline-block;
  position: relative;
  left: 21px;
  font-weight: bolder;
  font-style: normal;
`;

const InfoCardIcon = styled.img`
  height: auto;
  width: 15px;
  display: inline-block;
  margin-right: 6px;
`;

const AddressEdit = styled.a`
  cursor: pointer;
  color: #3498db;
  font-size: 13px;
  position: absolute;
  top: 0;
  right: 0;
`;

const AddressEditIcon = styled.img`
  height: auto;
  width: 14px;
  margin-right: 6px;
`;

const AddressEditText = styled.span`
  position: relative;
  bottom: 2px;
`;

const InfoCardLinks = styled.a`
  cursor: pointer;
  color: #3498db;
`;

const TransitIcon = InfoCardIcon.extend`
  position: relative;
  bottom: 13px;
`;

const TransitNumber = styled.div`
  display: inline-block;
  width: 28px;
  background-color: blue;
  border-radius: 8px;
  color: white;
  font-size: 11px;
  text-align: center;
  padding: 2px;
  position: relative;
  bottom: 16px;
  margin-right: 6px;
`;

const TransitInterSection = styled.div`
  display: inline-block;
  height: auto;
  width: 215px;
`;

const InfoCardPhoneNumber = styled.span`

`;

function ContentDisplayInfoCard(props) {
  return (
    <InfoCard className="info-card">
      <Map src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/staticmap.png" className="map"/>
      <BusinessContactWrapper className="business-contact-wrapper">
        <BusinessContactList className="business-contact-list">
          <AddressListRelative className="address-list-relative">
            <AddressIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/maps-and-flags.png"/>
            <BusinessAddress className="business-address">
              { props.address.street }<br/>
              { props.address.city }, { props.address.state } { props.address.zip }<br/>
              { props.address.country }<br/>
            </BusinessAddress>
            <AddressEdit className="address-edit">
              <AddressEditIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/pencil-edit-blue.png"/>
              <AddressEditText className="address-edit-text">
                Edit
              </AddressEditText>
            </AddressEdit>
          </AddressListRelative>
          <AddressList className="address-list-item">
            <InfoCardIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/turn-right-sign.png"/>
            <InfoCardLinks className="info-card-links">Get Directions</InfoCardLinks>
          </AddressList>
          <AddressList className="address-list-item">
            <TransitIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/public-transport-subway.png"/>
            <TransitNumber>
              511
            </TransitNumber>
            <TransitInterSection className="transit-intersection">
              Bathurst St. @ Bloor St. W. S. Side and 2 more stations
            </TransitInterSection>
          </AddressList>
          <AddressList className="address-list-item">
            <InfoCardIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/call-answer.png"/>
            <InfoCardPhoneNumber className="info-card-phone-number">
              { props.phone }
            </InfoCardPhoneNumber>
          </AddressList>
          <AddressList className="address-list-item">
            <InfoCardIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/external-link-square-with-an-arrow-in-right-diagonal.png"/>
            <InfoCardLinks>{ props.email }</InfoCardLinks>
          </AddressList>
          <AddressList className="address-list-item">
            <InfoCardIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/black-bubble-speech.png"/>
            <InfoCardLinks>Message the business</InfoCardLinks>
          </AddressList>
          <AddressList className="address-list-item">
            <InfoCardIcon src="https://s3.us-east-2.amazonaws.com/fecyelptopheader/searchbar/icon.png"/>
            <InfoCardLinks>Send to your Phone</InfoCardLinks>
          </AddressList>
        </BusinessContactList>
      </BusinessContactWrapper>
    </InfoCard>
  )
}

export default ContentDisplayInfoCard;
