'use client';

import Link from 'next/link';
import {
  CardContent,
  Typography,
  Grid,
  Avatar,
  Stack,
  Tooltip,
  Fab,
} from '@mui/material';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';
import { IconArrowRight } from '@tabler/icons-react';

interface Section {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function DashboardCard({ section }: { section: Section }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={section.href} passHref legacyBehavior>
        <a style={{ textDecoration: 'none', position: 'relative', display: 'block' }}>
          <BlankCard
            sx={{
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': { boxShadow: 6 },
              position: 'relative',
            }}
          >
            <Avatar
              src={section.image}
              variant="square"
              sx={{
                height: 200,
                width: '100%',
                borderRadius: '8px 8px 0 0',
              }}
            />
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  {section.description}
                </Typography>
              </Stack>
            </CardContent>

            {/* Floating Button that doesn’t interfere with card link */}
            <Tooltip title="Open">
              <Fab
                size="small"
                color="primary"
                sx={{
                  position: 'absolute',
                  bottom: 75,
                  right: 15,
                  zIndex: 2,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.href = section.href;
                }}
              >
                <IconArrowRight size="16" />
              </Fab>
            </Tooltip>
          </BlankCard>
        </a>
      </Link>
    </Grid>
  );
}
