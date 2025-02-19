import React from "react";

const Header = () => {
  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#5D5D7E",
      color: "white"
    }}>
      <img 
        src="/logo191.jpeg" 
        alt="Logo"
        style={{ height: "100px", marginBottom: "10px" }}
      />
      <h1>Bienvenue dans le Dashboard du Salon</h1>
    </div>
  );
};

export default Header;
