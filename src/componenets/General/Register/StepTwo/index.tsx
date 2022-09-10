import { isFormValid } from '@/utils/helper';
import React, { FC } from 'react';
import Button from '../../Button';
import Input from '@/componenets/General/Form/Input';
import { useFormik } from 'formik';
import PersonIcon from '@/assets/icons/PersonIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import { IRegister } from '@/utils/type';
import { RegisterStepTwoSchema } from '@/utils/validation';

interface RegisterStepTwoProps {
  current: number;
  payload: IRegister;
  onSubmit: (values: object) => void;
}

const RegisterStepTwo: FC<RegisterStepTwoProps> = ({ onSubmit }) => {
  const formik = useFormik({
    onSubmit,
    initialValues: { phone: '', fullname: '', checked: false },
    validationSchema: RegisterStepTwoSchema,
    validateOnChange: true,
  });

  return (
    <form className="w-full" autoComplete="off" onSubmit={formik.handleSubmit}>
      <Input
        className="mb-4"
        type={'text'}
        name="fullname"
        placeholder="Full Name"
        suffixIcon={
          <PersonIcon className="absolute top-[14px] left-4 text-[#DCDEF380]" />
        }
        value={formik.values.fullname}
        onChange={formik.handleChange}
        isError={isFormValid('fullname', formik)}
        errMsg={formik.errors.fullname}
      />
      <Input
        type={'text'}
        className="mb-4"
        name="phone"
        placeholder="Phone Number"
        suffixIcon={
          <PhoneIcon className="absolute top-[14px] left-4 text-[#DCDEF380]" />
        }
        value={formik.values.phone}
        onChange={formik.handleChange}
        isError={isFormValid('phone', formik)}
        errMsg={formik.errors.phone}
      />

      <div className="flex items-center gap-4">
        <Input
          name="checked"
          onChange={formik.handleChange}
          type={'checkbox'}
        />
        <span className="mt-[5px] font-medium">
          Agree to our{' '}
          <a
            className="text-blue-500"
            href="https://www.random.org/terms/2020-08-01"
            target={'_blank'}
            rel="noreferrer"
          >
            Terms and Conditions
          </a>
        </span>
      </div>

      <Button
        type="submit"
        isLoading={formik.isSubmitting}
        className="w-full h-[44px] !rounded-[61px] mt-8"
        theme={'primary'}
      >
        Submit
      </Button>
    </form>
  );
};

export default RegisterStepTwo;
