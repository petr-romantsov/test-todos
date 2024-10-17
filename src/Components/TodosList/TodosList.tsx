import { FC } from 'react';
import { Todo } from '../api/Todo';
import { TodoView } from '../TodoView/TodoView';

type TodosListProps = {
  todos: Todo[];
  removeTodo: (id: string) => void;
};

export const TodosList: FC<TodosListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};
