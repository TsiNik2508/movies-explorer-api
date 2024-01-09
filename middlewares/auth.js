const jwt = require('jsonwebtoken');
const Unauthorized = require('../error/Unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new Unauthorized('Необходима авторизаци');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'my-secret-key');
  } catch (err) {
    return next(new Unauthorized('Необходима авторизаци'));
  }
  req.user = payload;
  return next();
};
