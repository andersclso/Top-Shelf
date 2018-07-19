import React from 'react';
import ReactDOM from 'react-dom';

class TopShelf extends React.Component {
  constructor() {
    super();
    this.state = {
      id: undefined,
      alias: undefined,
      name: undefined,
      claimed: undefined,
      rating: undefined,
      review_count: undefined,
      price: undefined,
      category: undefined,
      address: undefined,
      website: undefined,
      email: undefined,
      phone: undefined
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        This is Top Shelf
      </div>
    )
  }
}

ReactDOM.render(<TopShelf />, document.getElementById("root"));
