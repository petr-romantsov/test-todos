import { FC } from 'react';
import { Todo } from '../api/Todo';
import './TodoView.css';

type TodoViewProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodoView: FC<TodoViewProps> = ({
  todo,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.isDone ? 'completed' : 'active'}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};
