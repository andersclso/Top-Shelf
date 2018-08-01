import React from 'react';
import BPMH_SearchBar from './BPMH_SearchBar.jsx';
import BPMH_Navigation from './BPMH_Navigation.jsx';

const axios = require('axios');

class BizPageMainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      findInput: '',
      nearInput: ''
    }

    this.handleFindInputChange = this.handleFindInputChange.bind(this);
    this.handleNearInputChange = this.handleNearInputChange.bind(this);
    this.handleSearchBizSubmit = this.handleSearchBizSubmit.bind(this);
    this.navHighlighter = this.navHighlighter.bind(this);
  }

  handleFindInputChange(e) {
    this.setState({
      findInput: e.target.value
    });
  }

  handleNearInputChange(e) {
    this.setState({
      nearInput: e.target.value
    });
  }

  handleSearchBizSubmit(e) {
    console.log('handleSearchBizSubmit was called!');
    e.preventDefault();
  }

  navHighlighter(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <BPMH_SearchBar searchBarSubmit={this.handleSearchBizSubmit} findInputChange={this.handleFindInputChange} nearInputChange={this.handleNearInputChange} navHighlighter={this.navHighlighter}/>
        <BPMH_Navigation />
      </div>
    )
  }
}

export default BizPageMainHeader;
