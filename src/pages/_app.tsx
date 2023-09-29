import '../styles/global.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
);

export default MyApp;
