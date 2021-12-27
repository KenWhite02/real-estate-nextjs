import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ken New State</title>
        <meta name="description" content="Browse properties on Realtor!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box maxWidth={'1280px'} m={'auto'}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
