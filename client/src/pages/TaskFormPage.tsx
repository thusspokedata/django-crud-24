import { useForm } from 'react-hook-form';
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api';
import { Button, Input, Separator, Task, Textarea } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Task>();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchTask() {
      if (params.id) {
        const {
          data: { title, description },
        } = await getTask(+params.id);

        setValue('title', title);
        setValue('description', description);
      }
    }
    fetchTask();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        await updateTask(+params.id, data);
        console.log('Task updated successfully!');
      }
      if (!params.id) {
        await createTask(data);
        console.log('Task created successfully!');
      }
      navigate('/tasks');
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  });

  const onDelete = async () => {
    try {
      await deleteTask(params.id ? +params.id : 0);
      navigate('/tasks');
      alert('Task deleted successfully!');
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <>
      <Separator />
      <div className="w-1/2 ml-10 mt-10">
        <form onSubmit={onSubmit}>
          <Input
            className=""
            type="text"
            placeholder="Title"
            {...register('title', { required: true })}
          />
          {errors.title && <span>Title is required</span>}
          <br />
          <Textarea
            rows={3}
            placeholder="Description"
            {...register('description', { required: true })}
          />
          {errors.description && <span>Description is required</span>}
          <br />
          <Button
            variant={'secondary'}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2"
            type="submit"
          >
            {!params.id ? 'Create Task!' : 'Update Task!'}
          </Button>
        </form>
        {params.id && (
          <Button
            variant="destructive"
            onClick={() => {
              const accepted = window.confirm(
                'Are you sure you want to delete this task?'
              );

              if (accepted) onDelete();
            }}
          >
            Delete Task
          </Button>
        )}
      </div>
    </>
  );
}
