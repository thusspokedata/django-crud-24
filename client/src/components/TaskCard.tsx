import { Task } from './TaskList';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { useNavigate } from 'react-router-dom';

export function TaskCard(task: Task) {
  const navigate = useNavigate();
  return (
    <Card
      className="w-1/5 my-5 ml-5 bg-slate-300"
      onClick={() => {
        navigate(`/task/${task.id}`);
      }}
    >
      <CardHeader>
        <CardTitle className="text-2xl capitalize">{task.title}</CardTitle>
        <CardDescription className="text-xl">
          {task.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs">{task.created_at}</p>
      </CardContent>
      <CardFooter>
        <p>{task.completed === true ? 'Task Completed' : 'Task Active'}</p>
      </CardFooter>
    </Card>
  );
}
