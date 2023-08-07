import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';

import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home Page'>
      <Typography variant='h1' color='primary'>
        Hola Mundo
      </Typography>
    </Layout>
  );
};

export default HomePage;

