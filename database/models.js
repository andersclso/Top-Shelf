const connection = require('./index.js');
const mongoose = require('mongoose');

const bizSchema = mongoose.Schema({
  id: { type: String, require: true },
  alias: { type: String, require: true},
  name: { type: String, require: true },
  claimed: { type: Boolean, require: true },
  rating: { type: Number, require: true },
  review_count: { type: Number, require: true },
  price: { type: String, require: true },
  category: { type: String, require: true },
  address: {
    street: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    zip: { type: String, require: true },
    country: { type: String, require: true }
  },
  website: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true }
});

const Biz = mongoose.model('Business', bizSchema);

module.exports = Biz;
