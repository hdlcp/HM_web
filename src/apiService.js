import axios from "axios";

const API_URL = "https://h-m-api.onrender.com/api/";

export const loginCaissiere = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/cashier/login/`, { username, password });
    localStorage.setItem("token", response.data.access);  // Sauvegarde du token
    return response.data;
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return null;
  }
};

export const fetchStaffs = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/staffs/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur récupération staffs :", error);
    return [];
  }
};

export const fetchClientsByStaff = async (staffId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/clients/unserved/${staffId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Erreur récupération clients du staff ${staffId} :`, error);
    return [];
  }
};
