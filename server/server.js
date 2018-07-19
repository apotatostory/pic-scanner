import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const server = http.createServer(app);
const socket = io.listen(server);

app.get('/chat', (req, res) => {
  socket.emit('connection', {});
});

socket.on('connection', _ => {
  console.log('user connection')
  socket.on('add user', msg => {
  })
});

app.listen(3000, () => {
  console.log("Server Started. http://localhost:3000");
});
