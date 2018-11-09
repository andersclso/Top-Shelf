import React from 'react';
import ReactDOM from 'react-dom';
import DataGenButton from './components/DataGenButton.jsx';
import BizPageMainHeader from './App/BizPageMainHeader';
import BizPageContentDisplay from './App/BizPageContentDisplay';
import styled from 'styled-components';

const TopShelfWrapper = styled.div`
  background-color: #f6f6f6;
  height: 520px;
`;

const axios = require('axios');

class TopShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessInfo: {
        id: '',
        alias: '',
        name: '',
        claimed: false,
        rating: 0,
        review_count: 0,
        price: 0,
        category: '',
        address: {},
        website: '',
        email: '',
        phone: ''
      }
    }

    this.FetchBusinessData = this.FetchBusinessData.bind(this);
  }

  componentDidMount() {
    console.log('Component Mounted!');
    this.FetchBusinessData()
  }

  FetchBusinessData(businessName = 'Gaylord - Schmidt', location) {
    console.log(`FetchBusinessData was invoked with: ${businessName} and ${location}`);
    axios.get('/main/biz', {
        params: {
          name: businessName,
          location: location
        }
      })
      .then((response) => {
        if (response.data) {

          let biz = response.data;

          this.setState({
            businessInfo: {
              id: biz.bus_id,
              alias: biz.alias,
              name: biz.name,
              claimed: biz.claimed,
              rating: biz.rating,
              review_count: biz.review_count,
              price: biz.price,
              category: biz.category,
              address: {
                street: biz.street,
                city: biz.city,
                country: biz.country,
                zip: biz.zip
              },
              website: biz.website,
              email: biz.email,
              phone: biz.phone
            }
          });
        } else {
          console.log('Cannot find business with this name!');
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <TopShelfWrapper className="top-shelf">
        <BizPageMainHeader businessSearch={this.FetchBusinessData} />
        <BizPageContentDisplay businessInfo={this.state.businessInfo} />
      </TopShelfWrapper>
    )
  }
}

ReactDOM.render(<TopShelf />, document.getElementById("root"));
