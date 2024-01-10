const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: 'Неверная почта',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});
function findUserByID(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Введены неверные данные'));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error('Введены неверные данные'));
        }
        return user;
      });
    });
}
userSchema.statics.findUserByID = findUserByID;
module.exports = mongoose.model('user', userSchema);
