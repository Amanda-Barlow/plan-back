const mongoose = require('mongoose');

// MODELS

const PlanSchema = new mongoose.Schema({
  name: { type: String },
  goal: { type: String },
  skills: { type: String },
//   frequency: { type: String },
//   coping: { type: String },
//   contacts: { type: String },
}, { timestamps: true });

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
