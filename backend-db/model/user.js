const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: [true, 'Please enter a valid user name']
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Please enter a valid email address']
    },
    phone: {
      type: Number,
    },
    company: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const UserData = mongoose.model('User', UserSchema)

module.exports = UserData