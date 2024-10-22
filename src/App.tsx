import { Container, Paper, Typography } from '@mui/material';
import './App.css';
import { useTodosList } from './Components/api/useTodosList';
import { AddTodoField } from './Components/AddTodoField/AddTodoField';
import { TodosList } from './Components/TodosList/TodosList';
import { FilterField } from './Components/FilterField/FilterField';

function App() {
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
        className="main-title"
        variant="h1"
        component="h1"
        gutterBottom
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
}

export default App;
