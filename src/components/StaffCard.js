import React from "react";

const StaffCard = ({ staff, clients }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getHours()} : ${date.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <div style={{
      border: "2px solid white",
      padding: "10px",
      width: "250px",
      margin: "10px",
      backgroundColor: "#D4D4D4",
      textAlign: "center",
      borderRadius: "10px"
    }}>
      {/* Image du staff */}
      <img 
        src={staff.image_url} 
        alt={staff.name} 
        width="100%" 
        style={{ borderRadius: "10px", marginBottom: "10px" }}
      />
      
      <h3>{staff.name}</h3>
      <h1>{staff.clients_waiting}</h1>

      {/* Liste des clients */}
      <div>
        {clients.length > 0 ? clients.map(client => (
          <div key={client.id} style={{
            backgroundColor: "#A0A0A0",
            margin: "5px",
            padding: "5px",
            borderRadius: "5px"
          }}>
            <p><strong>{client.pseudo}</strong></p>
            <p>{formatTime(client.timestamp)}</p>
          </div>
        )) : <p>Aucun client</p>}
      </div>
    </div>
  );
};

export default StaffCard;
