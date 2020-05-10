'use strict'

const app = require('express')();
const serverHttp= require('http').Server(app);
const io = require ('socket.io')(serverHttp);


const myMessajes= [];

io.on('connection', function(socket){
  socket.emit('text-event', myMessajes);

    socket.on('send-message', function(data){
        myMessajes.push(data);
        socket.emit('text-event', myMessajes);
        socket.broadcast.emit('text-event', myMessajes)

    })
});

serverHttp.listen(3200, () => {
  console.log(`server running on port ${3200}`)
});