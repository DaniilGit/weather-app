import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { useSearchCity } from '../lib/useSearchCity';
import { useNavigate } from 'react-router-dom';

export const CitySearch = () => {
  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => useSearchCity(e, navigate)}>
      <TextField
        label="City"
        name="city"
        variant="outlined"
        sx={{ width: '100%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
