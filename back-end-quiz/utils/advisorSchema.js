import mongoose from 'mongoose';

// Create schema
const Advisor_Schema = new mongoose.Schema({
  // sys: [String],
  displayName: String,
  email: String,
  phone: String,
  avatarUrl: {
    title: String,
    url: String
  },
  status: String,
  categoriesCollection: {
    items: Array
  },
  // skillsCollection: [Array],
  // servicesCollection: [Array]
});

export default Advisor_Schema;