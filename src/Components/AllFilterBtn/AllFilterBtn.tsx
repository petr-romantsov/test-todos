import { Button } from '@mui/material';
import { Filter } from '../../api/useTodoList.types';
import { FC } from 'react';

type AllFilterBtnProps = {
  filter: Filter;
  changeFilter: (filter: Filter) => void;
};

export const AllFilterBtn: FC<AllFilterBtnProps> = ({
  filter,
  changeFilter,
}) => {
  const onAllClickHandler = () => changeFilter('All');
  return (
    <Button
      sx={{
        fontWeight: 300,
        textTransform: 'none',
        fontSize: 'inherit',
      }}
      variant="text"
      color={filter === 'All' ? 'secondary' : 'inherit'}
      onClick={onAllClickHandler}
    >
      All
    </Button>
  );
};
