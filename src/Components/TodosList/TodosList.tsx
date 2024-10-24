import { FC } from 'react';
import { Todo } from '../../api/useTodoList.types.';
import { TodoItem } from '../TodoItem/TodoItem';
import { List } from '@mui/material';
import { EmptyListMessage } from '../EmptyListMessage/EmptyListMessage';

type TodosListProps = {
  todos: Todo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodosList: FC<TodosListProps> = ({
  todos,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <List sx={{ width: '100%', textAlign: 'left' }}>
      {!todos.length && <EmptyListMessage />}
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </List>
  );
};
