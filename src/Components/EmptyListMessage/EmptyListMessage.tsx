import { Typography } from '@mui/material';

export const EmptyListMessage = () => {
  return (
    <Typography
      sx={{ textAlign: 'center', paddingTop: '10px' }}
      variant="body1"
    >
      There is no one task
    </Typography>
  );
};
