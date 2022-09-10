import '../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import ThemeWrapper from '@/componenets/Layouts/ThemeWrapper';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
};

export default MyApp;
