import express from 'express'; //import ES6
import bodyParser from 'body-parser';
import * as db from './utils/DBUtils.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

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
const server = app.listen(8080, (req, res) => {
    console.log("Server up and run on the port 8080");
});