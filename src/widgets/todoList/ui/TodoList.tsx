import { useFetchTodos } from "../lib/useFetchTodos";

export const TodoList = () => {
  const { data, error, isLoading } = useFetchTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="todo-list">
      {data.map((todo) => (
        <div key={todo.id} className="todos">
          {todo.title}
        </div>
      ))}
    </div>
  );
};
