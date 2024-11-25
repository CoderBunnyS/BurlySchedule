const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  roles: { type: [String], default: ['attendee'] }, // attendee, volunteer, teacher, admin
});

module.exports = mongoose.model('User', UserSchema);
