import axios from "axios";
import { Tours } from "./Tours";

const API = "http://localhost:5000";
//process.env.REACT_APP_API

export const getTours = async () => {
  return await axios.get<Tours[]>(`${API}/tours`);
};

export const getTourById = async (id: string) => {
  return await axios.get<Tours>(`${API}/tours/${id}`);
};

export const createNewTour = async (tour: Tours) => {
  return await axios.post(`${API}/tours`, tour);
};

export const deleteTourById = async (id: string) => {
  return await axios.delete(`${API}/tours/${id}`);
};

export const updateTour = async (id: string, tour: Tours) => {
  return await axios.put(`${API}/tours/${id}`, tour);
};
