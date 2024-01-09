const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();

const {
  getAllUsers,
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);

router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().email().required(),
    }),
  }),
  updateUser,
);

module.exports = router;
