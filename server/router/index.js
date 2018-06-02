const router = require('express').Router();
const { listingController } = require('../controllers/listingController.js');
const { statController } = require('../controllers/statController.js');
const { amenityController } = require('../controllers/amenityController.js');
const { ruleController } = require('../controllers/ruleController');
const { hostController } = require('../controllers/hostController');

router.route('/listings')
      .get(listingController.FETCH)
      .post(listingController.SAVE);

router.route('/stats')
      .get(statController.FETCH)
      .post(statController.SAVE);

router.route('/amenities')
      .get(amenityController.FETCH)
      .post(amenityController.SAVE);

router.route('/rules')
      .get(ruleController.FETCH)
      .post(ruleController.SAVE);

router.route('/hosts')
      .get(hostController.FETCH)
      .post(hostController.SAVE);

module.exports = { router };