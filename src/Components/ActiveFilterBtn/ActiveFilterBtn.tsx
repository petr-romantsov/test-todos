import { Button } from '@mui/material';
import { Filter } from '../../api/useTodoList.types';
import { FC } from 'react';

type ActiveFilterBtnProps = {
  filter: Filter;
  changeFilter: (filter: Filter) => void;
};

export const ActiveFilterBtn: FC<ActiveFilterBtnProps> = ({
  filter,
  changeFilter,
}) => {
  const onActiveClickHandler = () => changeFilter('Active');

  return (
    <Button
      sx={{
        fontWeight: 300,
        textTransform: 'none',
        fontSize: 'inherit',
      }}
      variant="text"
      color={filter === 'Active' ? 'secondary' : 'inherit'}
      onClick={onActiveClickHandler}
    >
      Active
    </Button>
  );
};
