'use client';

import { Grid, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/dashboard/DashboardCard';
import { sections } from './sections-data';

const DashboardPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Quick CRM Dashboard
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <DashboardCard section={section} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default DashboardPage;
