import { FC } from 'react';
import { Filter, Todo } from '../api/useTodoList.types.';
import { Button, Typography } from '@mui/material';
import './FilterField.css';

type FilterFieldProps = {
  todos: Todo[];
  filter: Filter;
  changeFilter: (filter: Filter) => void;
  clearCompleted: () => void;
};

export const FilterField: FC<FilterFieldProps> = ({
  todos,
  filter,
  changeFilter,
  clearCompleted,
}) => {
  const activeTodosCount = todos.filter((todo) => todo.isDone === false).length;
  const onAllClickHandler = () => changeFilter('All');
  const onActiveClickHandler = () => changeFilter('Active');
  const onCompletedClickHandler = () => changeFilter('Completed');
  const onClearCompletedClickHandler = () => clearCompleted();

  return (
    <div className="filter-wrapper">
      <Typography
        variant="body1"
        sx={{
          color: '#8a8a8a',
          fontWeight: 300,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {activeTodosCount} items left
      </Typography>
      <Button
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          fontSize: 'inherit',
        }}
        variant="text"
        color={filter === 'All' ? 'secondary' : 'inherit'}
        onClick={onAllClickHandler}
      >
        All
      </Button>
      <Button
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          fontSize: 'inherit',
        }}
        variant="text"
        color={filter === 'Active' ? 'secondary' : 'inherit'}
        onClick={onActiveClickHandler}
      >
        Active
      </Button>
      <Button
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          fontSize: 'inherit',
        }}
        variant="text"
        color={filter === 'Completed' ? 'secondary' : 'inherit'}
        onClick={onCompletedClickHandler}
      >
        Completed
      </Button>
      <Button
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          fontSize: 'inherit',
        }}
        variant="text"
        color="inherit"
        onClick={onClearCompletedClickHandler}
      >
        Clear completed
      </Button>
    </div>
  );
};
