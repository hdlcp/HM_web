import React, { useEffect, useState } from "react";
import { fetchStaffs, fetchClientsByStaff } from "../apiService";
import StaffCard from "./StaffCard";

const StaffList = () => {
  const [staffs, setStaffs] = useState([]);
  const [clients, setClients] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const staffData = await fetchStaffs();
      setStaffs(staffData);

      const clientData = {};
      for (const staff of staffData) {
        const clients = await fetchClientsByStaff(staff.id);
        clientData[staff.id] = clients;
      }
      setClients(clientData);
    };

    loadData();
    const interval = setInterval(loadData, 30000); // Refresh toutes les 30 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      backgroundColor: "#5D5D7E",
      padding: "20px"
    }}>
      {staffs.map((staff) => (
        <StaffCard 
          key={staff.id} 
          staff={staff} 
          clients={clients[staff.id] || []} 
        />
      ))}
    </div>
  );
};

export default StaffList;
