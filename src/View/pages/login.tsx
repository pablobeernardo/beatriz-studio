"use client";

import { useState } from "react";
import { auth } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  
  const navigate = useNavigate(); // <-- CRIA O NAVIGATE

  const expectedSecretCode = "bia0510"; // Código secreto definido

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login realizado com sucesso!");
        navigate("/painel"); // <-- REDIRECIONA PRA /painel
      } catch (error) {
        console.error(error);
        alert("Erro ao fazer login: " + (error as Error).message);
      }
    } else {
      // Cadastro
      if (secretCode !== expectedSecretCode) {
        alert("Código secreto inválido!");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Usuário cadastrado com sucesso!");
        navigate("/painel"); // <-- TAMBÉM PODE REDIRECIONAR DEPOIS DO CADASTRO
      } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar: " + (error as Error).message);
      }
    }
  };


  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          minWidth: "300px",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          {isLogin ? "Entrar" : "Cadastrar"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
        />

        {!isLogin && (
          <input
            type="text"
            placeholder="Código Secreto"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
          />
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>

        <p style={{ textAlign: "center", fontSize: "14px" }}>
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
          >
            {isLogin ? "Cadastrar" : "Entrar"}
          </span>
        </p>
      </form>
    </div>
  );
}
