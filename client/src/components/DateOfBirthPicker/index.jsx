import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography } from '@mui/material';
import { sxStyles } from './sxStyles';

export const DateOfBirthPicker = forwardRef(({ error, label, name, control }, ref) => {
  const maxDate = moment().subtract(1, 'years');
  const minDate = moment().subtract(100, 'years');

  return (
    <Box sx={{ my: 2 }}>
      <LocalizationProvider dateAdapter={AdapterMoment} dateLibInstance={moment} >
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <DatePicker
              onChange={(date) => {
                const isoDate = date ? date.toISOString() : null;
                field.onChange(isoDate);
              }}
              selected={field.value}
              label={label}
              maxDate={maxDate}
              minDate={minDate}
              sx={{ width: '100%' }}
            />
          )}
        />
      </LocalizationProvider>
      {error && <Typography component='span' sx={sxStyles.spanError}>{error.message}</Typography>}
    </Box>
  );
});
