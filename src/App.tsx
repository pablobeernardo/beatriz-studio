// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './services/AuthContext'; // não esquece de importar
import HomePage from './View/home-view'; // <-- Corrige aqui (era só Home)
import Login from './View/pages/login';         // <-- Exemplo
import Painel from './View/components/painel-admin'; // <-- Exemplo

function App() {
  const { user } = useAuth(); // pega usuário logado ou null

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<Painel />} />

        
        {/* Protege a rota /admin */}
        <Route 
          path="/admin" 
          element={user ? <Painel /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
