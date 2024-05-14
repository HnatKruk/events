import { forwardRef } from 'react';
import { TextField } from '@mui/material';

export const InputField = forwardRef((
  {
    id,
    label,
    ...rest
  },
  ref
) => (
  <TextField
    id={id}
    label={label}
    variant='standard'
    fullWidth
    sx={{ my: 2 }}
    ref={ref}
    {...rest}
  />
));