const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, public)));


server.listen(port, ()=> {
    console.log(`server is up and running on port ${port}`);
})