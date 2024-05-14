import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'Only letters are allowed in the full name')
    .min(2, 'Full name must be at least 2 characters')
    .max(20, 'Full name must be no more than 20 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  dateOfBirth: yup
    .string()
    .required('Date of birth is required'),
});
