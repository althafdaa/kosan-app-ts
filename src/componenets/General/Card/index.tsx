import React, { FC } from 'react';
import HousingSample from '@/assets/images/housesample.jpg';
import MapPinIcon from '@/assets/icons/MapPinIcon';
import HeartIcon from '@/assets/icons/HeartIcon';
import Link from 'next/link';

interface CardProps {}

const Card: FC<CardProps> = (props) => {
  return (
    <Link href="/room/1" passHref>
      <a className="p-3 bg-[#202234] rounded-3xl min-w-fit">
        <img className="rounded-md" src={HousingSample.src} alt="house" />
        <div className="mt-4 flex flex-col gap-1">
          <h2 className="text-xl font-bold elipsis-oneline">
            Kosan Kosan Mantap
          </h2>
          <h4 className="text-base text-[#9396B2] font-bold elipsis-oneline">
            Start From Rp.1000.000
          </h4>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPinIcon /> <span className="text-xs">Bogor, Jawa Barat</span>
            </div>

            <HeartIcon />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
