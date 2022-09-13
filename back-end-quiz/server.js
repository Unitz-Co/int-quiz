import express from 'express';
import logger from 'morgan';
import main from './utils/db.js';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import serverRouter from './routes/server.route.js';

const app = express();

const port = process.env.PORT_SERVER || 3000;

app.use(cors(
    {
        methods: 'GET, PATCH, POST, DELETE'
    }
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('This is INT-QUIZ. Today is ' + new Date())
})

app.use('/server', serverRouter);

// connect db first then start server
main()
    .then((message) => {
        console.log(message);
    })
    .then(() =>
        app.listen(port, () => {
            console.log('Listening on port', port);
        })
    )
    .catch((err) => console.log(err));
