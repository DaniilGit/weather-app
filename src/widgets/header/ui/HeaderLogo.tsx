import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <Link to="/">
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <img src="/logo.png" alt="logo" width={40} />
        <Typography sx={{ fontWeight: 'bold', color: '#fff' }}>Weather App</Typography>
      </Box>
    </Link>
  );
};
