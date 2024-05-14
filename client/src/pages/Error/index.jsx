import { useRouteError, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { sxStyles } from './sxStyles';

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box component='section' sx={sxStyles.errorBox} >
      <Typography color='error' variant='h5'>
        Error: <i>{error.statusText || error.message}</i>
      </Typography>
      <Typography variant='h5'>Sorry, an unexpected error has occurred.</Typography>
      <MuiLink
        variant='h5'
        sx={sxStyles.homeLink}
        component={RouterLink}
        to='/'
      >
        Home page
      </MuiLink>
    </Box>
  );
};
