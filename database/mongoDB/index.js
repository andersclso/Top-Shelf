const MongoClient = require('mongodb').MongoClient;

let state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) return done();

  MongoClient.connect(url, (error, client) => {
    if (error) return done(error);
    state.db = client.db('yelp');
    done();
  });
}

exports.get = (collection) => {
  return state.db.collection(collection);
}

exports.close = (done) => {
  if (state.db) {
    state.db.close((error, result) => {
      state.db = null;
      state.mode = null;
      done(error);
    });
  }
}
