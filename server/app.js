import express from 'express'; //import ES6

const app = express();

app.get('/note', (req, res) => {

});

app.post('/note', (req, res) => {

});

app.delete('/note/:id', (req, res) => {

});

//up and run server
const server = app.listen(8080, (req, res) => {
    console.log("Server up and run on the port 8080");
});