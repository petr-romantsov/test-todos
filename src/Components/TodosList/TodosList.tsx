import { FC } from 'react';
import { Todo } from '../api/useTodoList.types.';
import { TodoItem } from '../TodoView/TodoItem';
import { List, Typography } from '@mui/material';

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
      {!todos.length && (
        <Typography
          sx={{ textAlign: 'center', paddingTop: '10px' }}
          variant="body1"
        >
          There is no one task
        </Typography>
      )}
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
