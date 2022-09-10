import * as y from 'yup';

export const LoginSchema = y.object().shape({
  email: y.string().required('Email is required').email(),
  password: y
    .string()
    .min(6, 'Password minimum 6 characters')
    .required('Password is required'),
});

export const RegisterStepOneSchema = y.object().shape({
  email: y.string().required('Email is required').email(),
  password: y
    .string()
    .min(6, 'Password minimum 6 characters')
    .required('Password is required'),
  confirmPassword: y
    .string()
    .required('Please retype your password.')
    .oneOf([y.ref('password')], 'Your passwords do not match.'),
});

export const RegisterStepTwoSchema = y.object().shape({
  fullname: y.string().required('Please insert your Full Name'),
  phone: y.number().required('Please insert your phone number'),
  checked: y.bool().oneOf([true], 'Field must be checked').required(),
});
