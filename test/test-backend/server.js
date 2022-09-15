const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const advisorRoute = require('./src/routes/advisor.router');
const categorieRoute = require('./src/routes/categorie.router');
const serviceRoute = require('./src/routes/service.router');
const skillRoute = require('./src/routes/skill.router');

const app = express();

dotenv.config();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connection Successfull!');
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use('/api/advisor', advisorRoute);
app.use('/api/categorie', categorieRoute);
app.use('/api/service', serviceRoute);
app.use('/api/skill', skillRoute);

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 8080');
});
