import React, { useState } from "react";
import { loginCaissiere } from "../apiService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginCaissiere(username, password);
    if (result) {
      navigate("/dashboard");
    } else {
      alert("Échec de la connexion. Veuillez vérifier vos informations.");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#5D5D7E",
      color: "white"
    }}>
      <div style={{
        width: "350px",
        backgroundColor: "#FFFFFF",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}>
        {/* Logo */}
        <img 
          src="/logo192.png"
          alt="Logo" 
          style={{ height: "80px", marginBottom: "20px" }} 
        />

        {/* Titre */}
        <h2 style={{ marginBottom: "20px", color: "#5D5D7E" }}>Connexion</h2>

        {/* Formulaire */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <input 
              type="text" 
              placeholder="Nom d'utilisateur" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #CCC",
                borderRadius: "5px",
                fontSize: "16px"
              }} 
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input 
              type="password" 
              placeholder="Mot de passe" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #CCC",
                borderRadius: "5px",
                fontSize: "16px"
              }} 
            />
          </div>
          <button 
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#5D5D7E",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Se connecter
          </button>
        </form>

        {/* Lien d'aide */}
        <p style={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#777"
        }}>
          Vous avez oublié votre mot de passe ? <a href="/reset" style={{ color: "#5D5D7E", textDecoration: "none" }}>Réinitialisez-le</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
