const Router = require('express');
const { body } = require('express-validator');
const EventsController = require('../controllers/EventsController');
const { validateDateOfBirth } = require('../middlewares/validateDateOfBirthMiddleware');

const router = new Router();

router.get('/events', EventsController.getAllEvents);

router.get('/events/:id', EventsController.getEvent);

router.put('/events/:id/participants', [
  body('fullName')
    .notEmpty().withMessage('Full name is required')
    .trim()
    .isLength({ min: 2 }).withMessage('Full name must be at least 2 characters')
    .isLength({ max: 20 }).withMessage('Full name must be no more than 20 characters'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('dateOfBirth').custom(validateDateOfBirth),
], EventsController.createAndAddParticipantToEvent);

module.exports = router;
