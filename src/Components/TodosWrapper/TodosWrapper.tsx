import { TodosList } from '../TodosList/TodosList';
import { AddTodoField } from '../AddTodoField/AddTodoField';
import { useTodosList } from '../api/useTodosList';
import { FilterField } from '../FilterField/FilterField';
import { Typography, Paper } from '@mui/material';

export const TodosWrapper = () => {
  const {
    todosList,
    addTodo,
    removeTodo,
    toggleTodo,
    filteredList,
    setFilter,
    clearCompleted,
  } = useTodosList();

  return (
    <Paper>
      <Typography variant="h1" gutterBottom>
        My todos
      </Typography>
      <AddTodoField addTodo={addTodo} />
      <TodosList
        todos={filteredList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
      <FilterField
        todos={todosList}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </Paper>
  );
};
