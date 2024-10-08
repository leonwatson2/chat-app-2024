import express from 'express'
import { Server } from "socket.io";
import { createServer } from 'http';
import { SocketManager } from './socketManager.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3231

app.use(cors())

const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});


app.get('/', function (req, res) {
  res.send('Hello World!');
})
io.on('connection', SocketManager);

server.listen(PORT, function () {
  console.log('listening on *:' + PORT);
});

