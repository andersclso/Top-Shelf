let generate = {
  rating: () => {
    let randomNumber = Math.random() * 5;
    return (Math.round(randomNumber * 2) / 2).toFixed(1);
  },
  reviews: () => {
    return Math.floor(Math.random() * 3000);
  },
  price: () => {
    return Math.floor(Math.random() * (4 - 1) + 1);
  }
}

module.exports = generate;
