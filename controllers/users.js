const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFound = require('../error/NotFound');
const BadRequest = require('../error/BadRequest');
const Unauthorized = require('../error/Unauthorized');
const Conflict = require('../error/Conflict');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, email } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      runValidators: true,
      new: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFound('Запрашиваемый пользователь не найден');
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new Conflict('Пользователь с такой почтой уже существует'));
        return;
      }
      if (err.name === 'ValidationError') {
        throw new BadRequest('Ошибка при обновлении данных');
      }
      throw err;
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { name, email } = req.body;
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then(() => res.status(201).send({
      name,
      email,
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new Conflict('Ошибка при создании пользователя'));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new BadRequest('На сервере произошла ошибка'));
        return;
      }
      next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByID(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'my-secret-key',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch((err) => {
      if (err.name === 'Error') {
        next(new Unauthorized('Введены неверные данные'));
      }
      next(err);
    });
};
