import { FC } from 'react';
import { Filter, Todo } from '../../api/useTodoList.types.';
import { AllFilterBtn } from '../AllFilterBtn/AllFilterBtn';
import { ClearCompletedBtn } from '../ClearCompletedBtn/ClearCompletedBtn';
import { ActiveFilterBtn } from '../ActiveFilterBtn/ActiveFilterBtn';
import { CompletedFilterBtn } from '../CompletedFilterBtn/CompletedFilterBtn';
import { ActiveTodosCount } from '../ActiveTodosCount/ActiveTodosCount';
import './FilterField.css';

type FilterFieldProps = {
  todos: Todo[];
  filter: Filter;
  changeFilter: (filter: Filter) => void;
  clearCompleted: () => void;
};

export const FilterField: FC<FilterFieldProps> = ({
  todos,
  filter,
  changeFilter,
  clearCompleted,
}) => {
  const activeTodosCount = todos.filter((todo) => todo.isDone === false).length;

  return (
    <div className="filter-wrapper">
      <ActiveTodosCount count={activeTodosCount} />
      <AllFilterBtn filter={filter} changeFilter={changeFilter} />
      <ActiveFilterBtn filter={filter} changeFilter={changeFilter} />
      <CompletedFilterBtn filter={filter} changeFilter={changeFilter} />
      <ClearCompletedBtn clearCompleted={clearCompleted} />
    </div>
  );
};
