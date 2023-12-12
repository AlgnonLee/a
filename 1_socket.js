// import {server} from 'socket.io';
const express = require('express');         //express package
const { createServer } = require('node:http');  //
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
  // io.emit('chat message','welcome!')
});

io.on('connection', (socket) => {
      io.emit('chat message','welcome!')
});



io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {    //monitoring the message we got
      io.emit('chat message', msg);         //sending message
    });
});


server.listen(9013, () => {
  console.log('server running at http://localhost:9013');
});