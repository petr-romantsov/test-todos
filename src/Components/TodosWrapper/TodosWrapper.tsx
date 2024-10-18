import { TodosList } from '../TodosList/TodosList';
import { AddTodoField } from '../AddTodoField/AddTodoField';
import { useTodosList } from '../api/useTodosList';
import { FilterField } from '../FilterField/FilterField';

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
    <div>
      <h1>My todos</h1>
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
    </div>
  );
};
