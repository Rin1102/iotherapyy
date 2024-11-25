const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  waterCups: { type: Number, required: true },
  mood: { type: Number, required: true },
  sleep: { type: Number, required: true },
  heartRate: { type: Number, required: true },
  stressLevel: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
