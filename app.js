const express = require('express');
const path = require('path');
const port = 8080;

const app = express();
      
const server = require('http').Server(app);
const io = require('socket.io')(server);  


app.use(express.static(path.join(__dirname, '/public')));

//This is the server side connection The client side connection will be set up in the index.html file
// open connections using the io variable declared above
// on is a method availed by socket.io
//connection is an event
// socket argument will be used each time we want to send and receive messages

io.on('connection', function(socket){
    console.log('A new connection has been made');
}) 


server.listen(port, ()=> {
    console.log(`server is up and running on port ${port}`);
});
