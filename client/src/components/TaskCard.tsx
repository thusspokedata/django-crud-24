import { Task } from './TaskList';

export function TaskCard(task: Task) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <hr />
    </div>
  );
}
