export type Todo = {
  text: string;
  id: string;
  isDone: boolean;
};

export type Filter = 'All' | 'Active' | 'Completed';

export type FieldError = string | null;

export type UseTodosListReturnType = {
  todosList: Todo[];
  addTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  filteredList: Todo[];
  filter: Filter;
  changeFilter: (filter: Filter) => void;
  clearCompleted: () => void;
  fieldError: string | null;
  setFieldError: React.Dispatch<React.SetStateAction<FieldError>>;
};
