import axios from 'axios';
import { Task } from '../components';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getAllTasks = () => api.get('/api/v1/tasks/');
export const createTask = (data: Task) => api.post('/api/v1/tasks/', data);
