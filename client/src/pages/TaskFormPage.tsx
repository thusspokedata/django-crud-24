import { useForm } from 'react-hook-form';
import { createTask } from '../api/tasks.api';
import { Task } from '../components';
import { useNavigate } from 'react-router-dom';

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createTask(data);
      navigate('/tasks');
      console.log('Task created successfully!');
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />{' '}
        <br />
        {errors.title && <span>Title is required</span>}
        <br />
        <textarea
          rows={3}
          placeholder="Description"
          {...register('description', { required: true })}
        />{' '}
        <br />
        {errors.description && <span>Description is required</span>}
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}
