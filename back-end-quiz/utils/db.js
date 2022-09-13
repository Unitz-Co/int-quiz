import mongoose from 'mongoose';
import Advisor_Schema from './advisorSchema.js'


function main() {
  return new Promise((resolve, reject) => {
    const uri = process.env.MONGODB_URI;

    if (uri) {
      mongoose
        .connect(uri)
        .then(() => resolve('Connected to MongoDB'))
        .catch(() => reject('Cannot connect to MongoDB'));
    } else {
      reject('Cannot read database uri from .env file');
    }
  });
}

// Create model
export const advisorsModel = mongoose.model('advisors', Advisor_Schema);

export default main;
