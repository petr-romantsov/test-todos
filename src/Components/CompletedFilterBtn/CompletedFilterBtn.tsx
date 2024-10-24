import { Button } from '@mui/material';
import { Filter } from '../../api/useTodoList.types.';
import { FC } from 'react';

type CompletedFilterBtnProps = {
  filter: Filter;
  changeFilter: (filter: Filter) => void;
};

export const CompletedFilterBtn: FC<CompletedFilterBtnProps> = ({
  filter,
  changeFilter,
}) => {
  const onCompletedClickHandler = () => changeFilter('Completed');

  return (
    <Button
      sx={{
        fontWeight: 300,
        textTransform: 'none',
        fontSize: 'inherit',
      }}
      variant="text"
      color={filter === 'Completed' ? 'secondary' : 'inherit'}
      onClick={onCompletedClickHandler}
    >
      Completed
    </Button>
  );
};
