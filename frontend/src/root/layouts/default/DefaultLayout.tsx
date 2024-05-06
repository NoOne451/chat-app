import { useEffect } from 'react';
import { CreateRoomDialog } from './components/CreateRoomDialog';
import JoinRoomDialog from './components/JoinRoomDialog';
import { socket } from '@/App';

const DefaultLayout = () => {
  useEffect(() => {}, [socket.emit('test', 'hello')]);
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-black w-dvw h-dvh">
      <CreateRoomDialog />

      <JoinRoomDialog />
    </div>
  );
};

export default DefaultLayout;
