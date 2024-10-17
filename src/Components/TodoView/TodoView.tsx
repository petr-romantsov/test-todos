import { FC } from 'react';
import { Todo } from '../api/Todo';

type TodoViewProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
};

export const TodoView: FC<TodoViewProps> = ({ todo, removeTodo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {todo.text}
      </label>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};
