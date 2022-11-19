import type { AppProps } from 'next/app';

import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
