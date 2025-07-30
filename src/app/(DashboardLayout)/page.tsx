'use client';
import { Grid, Typography } from '@mui/material';
import NavCard from './components/shared/NavCard';
import AuthGuard from '@/components/auth/AuthGuard';

export default function Home() {
  return (
    <AuthGuard>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={600}>
            Quick CRM
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <NavCard
            title="Quick Update"
            description="Create a fast sales rep update."
            path="/quick-update"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <NavCard
            title="My Activities"
            description="View and manage your CRM activities."
            path="/activities"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <NavCard
            title="My Accounts"
            description="Browse or manage your assigned accounts."
            path="/accounts"
          />
        </Grid>
      </Grid>
    </AuthGuard>
  );
}
