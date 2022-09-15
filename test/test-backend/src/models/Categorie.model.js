const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema(
  {
    displayName: { type: String },
    avatarUrl: {
      title: { type: String },
      url: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Categorie', CategorieSchema);
