import Chevron from '@/assets/icons/Chevron';
import Link from 'next/link';
import React, { FC } from 'react';

interface BackButtonProps {
  redirectTo: string;
  dir?: 'left' | 'up' | 'right' | 'down';
}

const BackButton: FC<BackButtonProps> = ({ redirectTo, dir }) => {
  return (
    <section className="min-w-full py-6">
      <Link href={redirectTo} passHref>
        <a>
          <Chevron dir={dir} />
        </a>
      </Link>
    </section>
  );
};

export default BackButton;
