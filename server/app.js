import express from 'express'; //import ES6
import bodyParser from 'body-parser';
import * as db from './utils/DBUtils.js';
import { serverPort } from '../etc/config.json';
import cors from 'cors';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/note', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/note', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/note/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

//up and run server
const server = app.listen(serverPort, () => {
    console.log(`Server up and run on the port ${ serverPort}`);
});