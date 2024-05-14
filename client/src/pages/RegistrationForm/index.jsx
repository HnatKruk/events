import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Box, Button } from '@mui/material';

import { validationSchema } from './validationSchema';
import { useCreateAndAddParticipantToEventMutation } from '../../store/api';

import { InputField } from '../../components/InputField';
import { DateOfBirthPicker } from '../../components/DateOfBirthPicker';
import { EventSourceField } from '../../components/EventSourceField';
import { Loader } from '../../components/Loader';
import { sxStyles } from './sxStyles';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  let { eventId } = useParams();
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [createParticipantMutation, { isLoading, error }] = useCreateAndAddParticipantToEventMutation();

  useEffect(() => {
    if (error) {
      navigate('/error', { replace: true });
    }
  }, [error, navigate]);

  const onSubmit = (data) => {
    createParticipantMutation({ eventId, data })
      .then(() => {
        reset();
        navigate('/', { replace: true });
      })
      .catch((error) => console.error('Failed to create participant:', error));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={sxStyles.registrationFormBox}>
      <Typography variant='h3' sx={{ mb: 4 }}>Event Registration</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id='fullName'
          label='Full Name'
          error={errors.fullName !== undefined}
          helperText={errors?.fullName?.message}
          {...register('fullName')}
        />
        <InputField
          id='email'
          label='Email'
          error={errors.email !== undefined}
          helperText={errors?.email?.message}
          {...register('email')}
        />
        <DateOfBirthPicker
          label='Date of birth'
          name='dateOfBirth'
          control={control}
          error={errors.dateOfBirth}
        />
        <EventSourceField
          name='eventSource'
          control={control}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
          <Button variant='outlined' onClick={() => navigate(-1)}>Back</Button>
          <Button variant='contained' type='submit'>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};
