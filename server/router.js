const router = require('express').Router();
const controller = require('./controllers.js');

router.route('/biz')
  .get(controller.get)
  .post(controller.post)

router.route('/fakeData')
  .post(controller.postFakerData)

module.exports = router;
