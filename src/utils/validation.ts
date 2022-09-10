import * as y from 'yup';

export const LoginSchema = y.object().shape({
  email: y.string().required('Email is required').email(),
  password: y
    .string()
    .min(6, 'Password minimum 6 characters')
    .required('Password is required'),
});
