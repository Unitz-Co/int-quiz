const mongoose = require('mongoose');

const AdvitorSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    status: { type: String, default: 'online' },
    avatarUrl: {
      title: { type: String },
      url: { type: String },
    },
    categoriesCollection: [
      {
        categorieId: {
          type: String,
          ref: 'Categorie',
        },
        cateName: {
          type: String,
        },
      },
    ],
    skillsCollection: [
      {
        skillId: {
          type: String,
          ref: 'Skill',
        },
        skillName: {
          type: String,
        },
      },
    ],
    servicesCollection: [
      {
        serviceId: { type: String, ref: 'Service' },
        serviceName: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Advitor', AdvitorSchema);
