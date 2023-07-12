const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.modelNames('User', userSchema)