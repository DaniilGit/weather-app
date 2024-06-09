import { Error } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

export const CityPageError = ({ error }: { error: AxiosError }) => {
  console.log(['s', 't', 'r'].sort());
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, height: '80vh' }}>
      <Error sx={{ fontSize: 80 }} />
      {error.response?.status === 404 ? (
        <Typography variant="h4">City not found</Typography>
      ) : (
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Error: {error.message}
        </Typography>
      )}
      <Link to="/">
        <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
          Go to main page
        </Typography>
      </Link>
    </Box>
  );
};
