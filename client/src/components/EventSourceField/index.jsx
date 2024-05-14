import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

export const EventSourceField = forwardRef(({ name, control }, ref) => {
  return (
    <Box sx={{ my: 3 }}>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>
          Where did you hear about this event?
        </FormLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value ?? ''}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <FormControlLabel value='Social media' control={<Radio />} label='Social media' />
              <FormControlLabel value='Friends' control={<Radio />} label='Friends' />
              <FormControlLabel value='Found myself' control={<Radio />} label='Found myself' />
            </RadioGroup>
          )}
        />
      </FormControl>
    </Box>
  );
});
