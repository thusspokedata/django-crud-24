import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from '.';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
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
    tasks.map((task) => <TaskCard key={task.id} {...task} />)
  ) : (
    <div>No Tasks</div>
  );
}
