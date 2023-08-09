import { Layout } from '@/components/layouts';
import { EntryList } from '@/components/ui';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending' />
            {/* add a new entry */}
            <EntryList status='pending' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In Progress' />
            <EntryList status='in-progress' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completed' />
            <EntryList status='completed' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;

