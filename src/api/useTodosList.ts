import { useEffect, useMemo, useState } from 'react';
import {
  FieldError,
  Filter,
  Todo,
  UseTodosListReturnType,
} from './useTodoList.types';
import { v4 as uuidv4 } from 'uuid';
import {
  loadTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from './LocalStorageService';

export const useTodosList = (): UseTodosListReturnType => {
  const [todosList, setTodosList] = useState<Todo[]>(loadTodosFromLocalStorage);
  const [filter, setFilter] = useState<Filter>('All');
  const [fieldError, setFieldError] = useState<FieldError>(null);

  useEffect(() => {
    saveTodosToLocalStorage(todosList);
  }, [todosList]);

  const addTodo = (text: string) => {
    if (text.trim() !== '') {
      setTodosList((prevTodos) => [
        ...prevTodos,
        {
          text: text.trim(),
          id: uuidv4(),
          isDone: false,
        },
      ]);
    } else {
      setFieldError('You need to fill the field');
    }
  };

  const removeTodo = (id: string) => {
    setTodosList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodosList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const activeTodos = useMemo(
    () => todosList.filter((todo) => !todo.isDone),
    [todosList],
  );
  const completedTodos = useMemo(
    () => todosList.filter((todo) => todo.isDone),
    [todosList],
  );

  const getFilteredTodos = () => {
    switch (filter) {
      case 'Active':
        return activeTodos;
      case 'Completed':
        return completedTodos;
      case 'All':
        return todosList;
    }
  };

  const changeFilter = (filter: Filter): void => {
    setFilter(filter);
  };

  const filteredList = getFilteredTodos();

  const clearCompleted = () => {
    setTodosList((prevTodos) => prevTodos.filter((todo) => !todo.isDone));
  };

  return {
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
  };
};
