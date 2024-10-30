import { render, screen } from '@testing-library/react';
import { AddTodoField } from './AddTodoField';

describe('AddTodoField', () => {
  const mockAddTodo = vi.fn();
  const mockSetFieldError = vi.fn();

  test('displays error when fieldError is not null', () => {
    const errorMessage = 'You need to fill the field';

    render(
      <AddTodoField
        fieldError={errorMessage}
        addTodo={mockAddTodo}
        setFieldError={mockSetFieldError}
      />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('doesnt display error when fieldError is null', () => {
    render(
      <AddTodoField
        fieldError={null}
        addTodo={mockAddTodo}
        setFieldError={mockSetFieldError}
      />,
    );

    expect(
      screen.queryByText(/ You need to fill the field/i),
    ).not.toBeInTheDocument();
  });
});
