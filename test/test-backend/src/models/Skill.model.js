const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema(
  {
    displayName: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', SkillSchema);
