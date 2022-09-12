import PageWrapper from '@/componenets/General/PageWrapper';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HousingSample from '@/assets/images/housesample.jpg';
import Card from '@/componenets/General/Card';
import Filler from '@/componenets/General/Filler';
import HeartIcon from '@/assets/icons/HeartIcon';
import Chevron from '@/assets/icons/Chevron';
import Link from 'next/link';

const RoomDetaiLpage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Kosan Detail | Kosan App</title>
      </Head>

      <PageWrapper>
        <div className="flex flex-col max-h-screen items-center justify-between w-full relative">
          <div className="min-w-full relative shadow-lg">
            <div className="flex justify-between absolute z-10 items-center w-full bg-slate-500 bg-opacity-20 rounded-b-xl px-4">
              <Link href={'/'} passHref>
                <a>
                  <Chevron />
                </a>
              </Link>

              <div className="flex gap-4">
                <Link href={'/'} passHref>
                  <a>
                    <HeartIcon />
                  </a>
                </Link>
                <Link href={'/'} passHref>
                  <a>
                    <HeartIcon />
                  </a>
                </Link>
              </div>
            </div>
            <img
              className="h-[360px] w-full object-cover "
              src={HousingSample.src}
              alt="image"
            />
          </div>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Filler />
        </div>
      </PageWrapper>
    </>
  );
};

export default RoomDetaiLpage;
