import axios from 'axios';
import { Task } from '../components';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getAllTasks = () => api.get('/api/v1/tasks/');
export const getTask = (id: number) => api.get(`/api/v1/tasks/${id}/`);
export const createTask = (data: Task) => api.post('/api/v1/tasks/', data);
export const deleteTask = (id: number) => api.delete(`/api/v1/tasks/${id}/`);
export const updateTask = (id: number, data: Task) =>
  api.put(`/api/v1/tasks/${id}/`, data);
