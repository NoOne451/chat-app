import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './root/layouts/default/DefaultLayout';
import DefaultLayout from './root/layouts/default/DefaultLayout';
import io from 'socket.io-client';

// eslint-disable-next-line no-var
export const socket = io('http://localhost:8080');
const App = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
    },
    {
      path: '/room/:roomId',
      element: <RootLayout />,
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
