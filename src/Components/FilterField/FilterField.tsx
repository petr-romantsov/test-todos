import { FC } from 'react';
import './FilterField.css';
import { Todo } from '../api/Todo';

type FilterFieldProps = {
  todos: Todo[];
  setFilter: (filter: string) => void;
};

export const FilterField: FC<FilterFieldProps> = ({ todos, setFilter }) => {
  const activeTodosCount = todos.filter((todo) => todo.isDone === false).length;

  return (
    <div className="filter-wrapper">
      <span className="filter-btn">{activeTodosCount} items left</span>
      <button className="filter-btn" onClick={() => setFilter('All')}>
        All
      </button>
      <button className="filter-btn" onClick={() => setFilter('Active')}>
        Active
      </button>
      <button className="filter-btn" onClick={() => setFilter('Completed')}>
        Completed
      </button>
      <button className="filter-btn">Clear completed</button>
    </div>
  );
};
