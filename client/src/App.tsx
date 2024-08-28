import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksPage, TaskFormPage } from './pages';
import { Navigation } from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task-create" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
