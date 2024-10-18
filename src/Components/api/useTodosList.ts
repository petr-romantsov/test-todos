import { useEffect, useMemo, useState } from 'react';
import { Todo } from './Todo';

export const useTodosList = () => {
  const initialTodos: Todo[] = [
    {
      text: 'Сделать структуру проекта',
      id: '1',
      isDone: false,
    },
    {
      text: 'Прописать логику добавления дела',
      id: '2',
      isDone: false,
    },
    {
      text: 'Прописать логику отметки дела выполненным',
      id: '3',
      isDone: false,
    },
    {
      text: 'Прописать логику удаления дела',
      id: '4',
      isDone: false,
    },
    {
      text: 'Добавить в проекте Material UI',
      id: '5',
      isDone: false,
    },
  ];
  const [todosList, setTodosList] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosList));
  }, [todosList]);

  const [filter, setFilter] = useState<string>('All');

  const addTodo = (text: string) => {
    setTodosList([
      ...todosList,
      {
        text: text,
        id: crypto.randomUUID(),
        isDone: false,
      },
    ]);
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
    [todosList, filter],
  );
  const completedTodos = useMemo(
    () => todosList.filter((todo) => todo.isDone),
    [todosList, filter],
  );

  const getFilteredTodos = () => {
    switch (filter) {
      case 'Active':
        return activeTodos;
      case 'Completed':
        return completedTodos;
      default:
        return todosList;
    }
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
    setFilter,
    clearCompleted,
  };
};
