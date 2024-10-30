import { renderHook, act } from '@testing-library/react';
import { useTodosList } from './useTodosList';

describe('check useTodosList-addTodo', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add a new todo', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('New task');
    });

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].text).toBe('New task');
  });

  test('Should not add todo if text is empty', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('  ');
    });

    expect(result.current.todosList).toHaveLength(0);
    expect(result.current.fieldError).toBe('You need to fill the field');
  });
});

describe('check useTodoList-removeToDO', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should remove todo', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('First task');
      result.current.addTodo('Second task');
    });

    const idToRemove = result.current.todosList[0].id;

    act(() => {
      result.current.removeTodo(idToRemove);
    });

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].text).toBe('Second task');
  });
});

describe('check useTodosList-toggleTodo', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should switch isDone state correctly', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('New task');
    });
    const newTaskID = result.current.todosList[0].id;

    act(() => {
      result.current.toggleTodo(newTaskID);
    });

    expect(result.current.todosList[0].isDone).toBe(true);
  });

  test('should switch isDone of one of several todos correctly', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('first task');
      result.current.addTodo('second task');
      result.current.addTodo('third task');
    });

    const idToToggle = result.current.todosList[1].id;

    act(() => {
      result.current.toggleTodo(idToToggle);
    });

    expect(result.current.todosList[1].isDone).toBe(true);
  });
});

describe('check useTodosList-changeFilter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should change filter correctly', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.changeFilter('Active');
      result.current.changeFilter('Completed');
    });

    expect(result.current.filter).toBe('Completed');
  });
});

describe('check useTodosList-clearCompleted', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should clear completed todos', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('Active task');
      result.current.addTodo('Completed task');
      result.current.addTodo('Second completed task');
    });

    const firstIdToToggle = result.current.todosList[1].id;
    const secondIdToToggle = result.current.todosList[2].id;

    act(() => {
      result.current.toggleTodo(firstIdToToggle);
      result.current.toggleTodo(secondIdToToggle);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].text).toBe('Active task');
  });
});

describe('check useTodosList-filteredTodos', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return all todos when the filter is All', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('Active task');
      result.current.addTodo('Completed task');
    });

    act(() => {
      result.current.changeFilter('All');
    });

    expect(result.current.filteredList).toHaveLength(2);
  });

  test('should return only active todos when the filter is Active', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('Active task');
      result.current.addTodo('Completed task');
    });

    const idToToggle = result.current.todosList[1].id;

    act(() => {
      result.current.toggleTodo(idToToggle);
    });

    act(() => {
      result.current.changeFilter('Active');
    });

    expect(result.current.filteredList).toHaveLength(1);
    expect(result.current.filteredList[0].text).toBe('Active task');
    expect(result.current.filteredList[0].isDone).toBe(false);
  });

  test('should return only completed todos when the filter is Completed', () => {
    const { result } = renderHook(() => useTodosList());

    act(() => {
      result.current.addTodo('Active task');
      result.current.addTodo('Completed task');
    });

    const idToToggle = result.current.todosList[1].id;

    act(() => {
      result.current.toggleTodo(idToToggle);
    });

    act(() => {
      result.current.changeFilter('Completed');
    });

    expect(result.current.filteredList).toHaveLength(1);
    expect(result.current.filteredList[0].text).toBe('Completed task');
    expect(result.current.filteredList[0].isDone).toBe(true);
  });
});

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

    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');

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
    localStorage.setItem('todos', JSON.stringify(initialTodos));

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

    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');

    expect(savedTodos).toHaveLength(0);
  });
});
