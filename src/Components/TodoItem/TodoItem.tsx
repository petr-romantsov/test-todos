import { FC } from 'react';
import { Todo } from '../../api/useTodoList.types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import './TodoItem.css';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

type TodoItemProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      }
    >
      <ListItemButton
        sx={{ p: '0 48px 0 0' }}
        onClick={() => toggleTodo(todo.id)}
      >
        <ListItemIcon>
          <Checkbox color="success" checked={todo.isDone} />
        </ListItemIcon>
        <ListItemText
          className={todo.isDone ? 'completed' : 'active'}
          primary={todo.text}
          data-testid="for-test"
        />
      </ListItemButton>
    </ListItem>
  );
};
