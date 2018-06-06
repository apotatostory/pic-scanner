import express from 'express';
import {
  Server
} from 'http';
import io from 'socket.io';


const app = express();
const server = Server(app);


app.get('/', (req, res) => {
  debugger;
  console.log(Server);
  console.log(io);
  res.send('Hello, World!');
});

io

app.listen(3001, () => {
  console.log("Server Started. http://localhost:3001");
});