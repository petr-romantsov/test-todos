import { Button } from '@mui/material';
import { FC } from 'react';

type ClearCompletedBtnProps = {
  clearCompleted: () => void;
};

export const ClearCompletedBtn: FC<ClearCompletedBtnProps> = ({
  clearCompleted,
}) => {
  const onClearCompletedClickHandler = () => clearCompleted();
  return (
    <Button
      sx={{
        fontWeight: 300,
        textTransform: 'none',
        fontSize: 'inherit',
      }}
      variant="text"
      color="inherit"
      onClick={onClearCompletedClickHandler}
    >
      Clear completed
    </Button>
  );
};
