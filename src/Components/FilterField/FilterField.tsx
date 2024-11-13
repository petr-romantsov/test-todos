import { FC, useMemo } from 'react';
import { Filter, Todo } from '../../api/useTodoList.types';
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
  const activeTodosCount = useMemo(
    () => todos.filter((todo) => todo.isDone === false).length,
    [todos],
  );

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
