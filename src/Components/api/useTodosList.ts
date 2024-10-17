import { useState } from 'react';
import { Todo } from './Todo';

export const useTodosList = () => {
  const testList: Todo[] = [
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
  const [todosList, setTodosList] = useState<Todo[]>(testList);

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

  return {
    todosList,
    addTodo,
    removeTodo,
  };
};
