const router = require('express').Router();
const controller = require('./controllers.js');

router.route('/biz')
  .get(controller.get)
  .post(controller.post)

module.exports = router;
