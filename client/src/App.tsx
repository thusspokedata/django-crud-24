import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import { Navigation } from './components';
import { TaskFormPage, TasksPage } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task-create" element={<TaskFormPage />} />
        <Route path="/task/:id" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
