import EmailIcon from '@/assets/icons/Email';
import LockIcon from '@/assets/icons/LockIcon';
import { isFormValid } from '@/utils/helper';
import { RegisterStepOneSchema } from '@/utils/validation';
import { useFormik } from 'formik';
import Input from '@/componenets/General/Form/Input';
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { IRegister } from '@/utils/type';
import Button from '../../Button';

interface RegisterStepOneProps {
  onSubmit: (values: object) => void;
}

const RegisterStepOne: FC<RegisterStepOneProps> = ({ onSubmit }) => {
  const formik = useFormik({
    onSubmit,
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationSchema: RegisterStepOneSchema,
  });

  return (
    <form className="w-full" autoComplete="off" onSubmit={formik.handleSubmit}>
      <Input
        className="mb-4"
        type={'email'}
        name="email"
        placeholder="Email"
        suffixIcon={<EmailIcon className="absolute top-[14px] left-4" />}
        value={formik.values.email}
        onChange={formik.handleChange}
        isError={isFormValid('email', formik)}
        errMsg={formik.errors.email}
      />
      <Input
        type={'password'}
        className="mb-4"
        name="password"
        placeholder="Password"
        suffixIcon={
          <LockIcon className="absolute top-[14px] left-4 text-[#DCDEF380]" />
        }
        value={formik.values.password}
        onChange={formik.handleChange}
        isError={isFormValid('password', formik)}
        errMsg={formik.errors.password}
      />
      <Input
        type={'password'}
        name="confirmPassword"
        placeholder="Retype your password"
        suffixIcon={
          <LockIcon className="absolute top-[14px] left-4 text-[#DCDEF380]" />
        }
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        isError={isFormValid('confirmPassword', formik)}
        errMsg={formik.errors.confirmPassword}
      />

      <Button
        type="submit"
        className="w-full h-[44px] !rounded-[61px] mt-8"
        theme="primary"
      >
        Next
      </Button>
    </form>
  );
};

export default RegisterStepOne;
