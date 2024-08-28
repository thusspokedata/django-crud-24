import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div>
      <h1>Task App</h1>
      <Link to="/tasks">Tasks</Link>
      <br />
      <Link to="/task-create">Create Tasks</Link>
    </div>
  );
}
