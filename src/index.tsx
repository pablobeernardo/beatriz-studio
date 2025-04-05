// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // <-- Importa App.tsx
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './services/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App /> {/* <-- Renderiza o App, não o HomePage */}
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
