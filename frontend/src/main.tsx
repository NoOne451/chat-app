import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ThemeProvider } from './components/ui/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
