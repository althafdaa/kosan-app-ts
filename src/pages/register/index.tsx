import BackButton from '@/componenets/General/BackButton';
import PageWrapper from '@/componenets/General/PageWrapper';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import RegisterMockup from '@/assets/images/registermockup';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import CheckIcon from '@/assets/icons/CheckIcon';
import RegisterStepOne from '@/componenets/General/Register/StepOne';
import { IRegister } from '@/utils/type';
import { useRouter } from 'next/router';
import RegisterStepTwo from '@/componenets/General/Register/StepTwo';

const steps = [{ value: 1 }, { value: 2 }];

const RegisterPage: NextPage = () => {
  const [payload, setPayload] = useState<IRegister>({
    email: '',
    password: '',
    confirmPassword: '',
    fullname: '',
    phone: '',
  });
  const router = useRouter();
  const { step } = router.query;
  const [submitLoading, setSubmitLoading] = useState(false);
  const handleSubmit = (values: object) => {
    if (current === 1) {
      setPayload((prev) => ({ ...prev, ...values }));
      router.push(`/register?step=2`);
      return;
    }

    setSubmitLoading(true);
    try {
      const data = { ...payload, ...values };
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitLoading(false);
    }
  };
  const [current, setCurrent] = useState(1);
  const LAST_INDEX = steps.length - 1;

  useEffect(() => {
    if (!payload.email) {
      router.push('/register');
      return;
    }

    if (step) {
      return setCurrent(Number(step));
    }

    return setCurrent(1);
  }, [step]);

  return (
    <>
      <Head>
        <title>Kosan App | Sign Up</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <section className="min-h-screen min-w-full flex flex-col relative">
          <BackButton redirectTo="/" />

          <section>
            <div className="flex flex-col gap-4 items-center">
              <RegisterMockup className="w-[180px] h-[180px]" />

              <div className="w-full flex items-center justify-center">
                {steps.map((item, idx) => {
                  return (
                    <div className="flex items-center" key={idx}>
                      <button
                        onClick={() => {
                          if (item.value < current) {
                            return setCurrent(item.value);
                          }
                        }}
                        className={clsx(
                          'transition-all text-xl h-8 w-8 flex items-center justify-center rounded-full font-bold',
                          {
                            'bg-blue-500': current === item.value,
                            'bg-green-500': item.value < current,
                          }
                        )}
                        key={idx}
                      >
                        {item.value < current ? <CheckIcon /> : item.value}
                      </button>
                      {idx !== LAST_INDEX && (
                        <div className="h-[2px] w-[50px] bg-white"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center w-full relative">
                <h1 className="text-2xl font-semibold "> Create New Account</h1>
              </div>

              {current === 1 && (
                <RegisterStepOne
                  payload={payload}
                  current={current}
                  onSubmit={handleSubmit}
                />
              )}

              {current === 2 && (
                <RegisterStepTwo
                  current={current}
                  payload={payload}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </section>
          <h5 className="absolute inset-x-0 bottom-4 text-center">
            Already have an account ?{' '}
            <Link href={'/signin'} passHref>
              <a className="font-medium text-blue-500">Sign In</a>
            </Link>
          </h5>
        </section>
      </PageWrapper>
    </>
  );
};

export default RegisterPage;
