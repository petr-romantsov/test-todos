import { TodosList } from '../TodosList/TodosList';
import { AddTodoField } from '../AddTodoField/AddTodoField';
import { useTodosList } from '../api/useTodosList';
import { FilterField } from '../FilterField/FilterField';

export const TodosWrapper = () => {
  const { todosList, addTodo, removeTodo } = useTodosList();

  return (
    <div>
      <h1>My todos</h1>
      <AddTodoField addTodo={addTodo} />
      <TodosList todos={todosList} removeTodo={removeTodo} />
      <FilterField />
    </div>
  );
};
