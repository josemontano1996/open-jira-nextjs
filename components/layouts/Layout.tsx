import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import { NavBar } from '../ui';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title = 'OpenJira' }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar/>

      {/* sidebar */}

      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
