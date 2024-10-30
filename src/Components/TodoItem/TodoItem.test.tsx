import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import { Todo } from '../../api/useTodoList.types';

describe('TodoItem component', () => {
  const mockRemoveTodo = vi.fn();
  const mockToggleTodo = vi.fn();

  const testTodo: Todo = {
    id: '1',
    text: 'Test Todo',
    isDone: false,
  };

  beforeEach(() => {
    render(
      <TodoItem
        todo={testTodo}
        removeTodo={mockRemoveTodo}
        toggleTodo={mockToggleTodo}
      />,
    );
  });

  it('renders todo text', () => {
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('calls removeTodo when delete button is clicked', () => {
    const deleteButton = screen.getByLabelText('delete');
    fireEvent.click(deleteButton);

    expect(mockRemoveTodo).toBeCalledWith(testTodo.id);
  });

  it('calls toggleTodo when checkbox is clicked', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockToggleTodo).toBeCalledWith(testTodo.id);
  });
});

describe('TodoItem component - TextField', () => {
  const mockRemoveTodo = vi.fn();
  const mockToggleTodo = vi.fn();

  const activeTodo: Todo = {
    id: '1',
    text: 'Active todo',
    isDone: false,
  };
  const completedTodo: Todo = {
    id: '2',
    text: 'Completed todo',
    isDone: true,
  };

  test('Should use the correct class depending isDone field value', () => {
    const { rerender } = render(
      <TodoItem
        todo={activeTodo}
        removeTodo={mockRemoveTodo}
        toggleTodo={mockToggleTodo}
      />,
    );

    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.getByTestId('for-test')).toHaveClass('active');
    expect(screen.getByTestId('for-test')).not.toHaveClass('completed');

    rerender(
      <TodoItem
        todo={completedTodo}
        removeTodo={mockRemoveTodo}
        toggleTodo={mockToggleTodo}
      />,
    );

    expect(screen.getByText('Completed todo')).toBeInTheDocument();
    expect(screen.getByTestId('for-test')).toHaveClass('completed');
    expect(screen.getByTestId('for-test')).not.toHaveClass('active');
  });
});
