import { authStore } from "@/features";
import { useFetchTodos } from "../lib/useFetchTodos";

export const TodoList = () => {
  const { data, error, isLoading } = useFetchTodos();

  console.log(authStore.user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="todo-list">
      {data.map((todo) => (
        <div className="todos">{todo.title}</div>
      ))}
    </div>
  );
};
