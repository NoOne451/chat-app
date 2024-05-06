import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const server = createServer(app);

const socket = new Server(server, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const roomData = new Map();

socket.on('connection', (client) => {
  console.log(`Socket ${client.id} connected`);

  client.on('join-room', (data) => {
    const { roomId, username } = data;
    if (roomData.has(roomId)) {
      client.emit('room-result', {
        status: 'failed',
        message: 'Room is already exists',
      });
    } else {
      client.join(roomId);
      roomData.set(roomId, {
        roomId,
        clients: [
          {
            id: client.id,
            username,
          },
        ],
      });
      client.emit('room-result', {
        status: 'success',
        message: 'Room created successfully',
      });
    }
  });
  client.on('disconnect', () =>
    console.log(`Socket ${client.id} disconnected`)
  );
});
