const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advisorSchema = new Schema({
  sys: {
    type: Schema.Types.Mixed,
    require: true
  },
  displayName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  avatarUrl: {
    type: Schema.Types.Mixed,
    require: true
  },
  categoriesCollection: {
    type: Schema.Types.Mixed,
    require: true
  },
  skillsCollection: {
    type: Schema.Types.Mixed,
    require: true
  },

})
module.exports = mongoose.model("Advisor", advisorSchema);