'use client';
import BlankCard from './BlankCard';
import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

interface NavCardProps {
  title: string;
  description: string;
  path: string;
}

export default function NavCard({ title, description, path }: NavCardProps) {
  return (
    <BlankCard>
      <Box p={2}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {description}
        </Typography>
        <Link href={path} passHref>
          <Button variant="contained" color="primary">
            Go
          </Button>
        </Link>
      </Box>
    </BlankCard>
  );
}
