import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { cwd } from 'process';

async function start() {
  const result = JSON.parse(fs.readFileSync(cwd() + '/data.json', 'utf8'));
  const { items } = result.data.advisorProfileCollection;
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: '*' }));
  app.get('/', (req, res) => {
    res.status(200).json(items);
  });
  app.listen(3000);
}

start()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
