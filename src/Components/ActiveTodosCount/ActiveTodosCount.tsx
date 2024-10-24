import { Typography } from '@mui/material';
import { FC } from 'react';

type ActiveTodosCountProps = {
  count: number;
};

export const ActiveTodosCount: FC<ActiveTodosCountProps> = ({ count }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: '#8a8a8a',
        fontWeight: 300,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {count} items left
    </Typography>
  );
};
