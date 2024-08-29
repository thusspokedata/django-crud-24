import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from '.';

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
  created_at?: string;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await getAllTasks();
        setTasks(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTasks();
  }, []);

  return tasks.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-10">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  ) : (
    <div>No Tasks</div>
  );
}
