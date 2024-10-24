import { Container, Paper, Typography } from '@mui/material';
import { useTodosList } from '../../api/useTodosList';
import { AddTodoField } from '../AddTodoField/AddTodoField';
import { TodosList } from '../TodosList/TodosList';
import { FilterField } from '../FilterField/FilterField';

export const TodoApp = () => {
  const {
    todosList,
    addTodo,
    removeTodo,
    toggleTodo,
    filteredList,
    filter,
    changeFilter,
    clearCompleted,
    fieldError,
    setFieldError,
  } = useTodosList();

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{ color: '#deabe6' }}
      >
        todos
      </Typography>
      <Paper elevation={6} sx={{ p: 2 }}>
        <AddTodoField
          addTodo={addTodo}
          fieldError={fieldError}
          setFieldError={setFieldError}
        />
        <TodosList
          todos={filteredList}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
        <FilterField
          todos={todosList}
          changeFilter={changeFilter}
          clearCompleted={clearCompleted}
          filter={filter}
        />
      </Paper>
    </Container>
  );
};
