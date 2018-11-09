const router = require('express').Router();
const controller = require('./controllers');

router.route('/biz')
  .get(controller.getBusinessData)
  .post(controller.postBusinessData)

module.exports = router;
