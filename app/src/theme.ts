import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  
  },
  palette: {
    mode: 'dark',
    error: {
      main: red.A400,
    },
  },
});

export default theme;
