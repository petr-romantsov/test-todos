import { renderHook, act } from '@testing-library/react';
import { useTodosList } from './useTodosList';
import {
  loadTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from './LocalStorageService';

describe('check useTodoList-localstorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('todo list should be saved in localstorage', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('First task');
      result.current.addTodo('Second task');
    });

    const savedTodos = loadTodosFromLocalStorage();

    expect(savedTodos).toHaveLength(2);
    expect(savedTodos[0].text).toBe('First task');
  });

  test('should load todos from localStorage', () => {
    const initialTodos = [
      {
        text: 'First task',
        id: '1',
        isDone: false,
      },
      {
        text: 'Second task',
        id: '2',
        isDone: false,
      },
    ];

    saveTodosToLocalStorage(initialTodos);

    const { result } = renderHook(() => useTodosList());

    expect(result.current.todosList).toHaveLength(2);
    expect(result.current.todosList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ text: 'First task', id: '1', isDone: false }),
        expect.objectContaining({
          text: 'Second task',
          id: '2',
          isDone: false,
        }),
      ]),
    );
  });

  test('should update localstorage when todo was removed', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('task to remove');
    });

    const idToRemove = result.current.todosList[0].id;

    act(() => {
      result.current.removeTodo(idToRemove);
    });

    const savedTodos = loadTodosFromLocalStorage();

    expect(savedTodos).toHaveLength(0);
  });
});
