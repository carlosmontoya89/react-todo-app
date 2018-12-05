const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required!']
  },

  email: {
    type: String,
    unique: true,
    required: [true, 'email is required!']
  },

  country: {
    type: String,
    required: [true, 'country is required!']
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Apps', userSchema);