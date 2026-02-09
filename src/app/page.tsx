// src/app/page.tsx

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { Button, Container, Typography, Box } from '@mui/material';
import { loginRequest } from '../auth/authConfig';

export default function LoginLandingPage() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  const handleLogin = () => {
    instance.loginRedirect({
      ...loginRequest,
      redirectUri: '/', // come back here
    });
  };

  useEffect(() => {
    if (inProgress === InteractionStatus.None && isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [inProgress, isAuthenticated, router]);

  // ✅ Don’t show anything while MSAL is loading
  if (inProgress !== InteractionStatus.None) return null;
  if (isAuthenticated) return null;

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box mb={4}>
        <img
          src="/images/logos/dark-logo.png"
          alt="QuickCRM Logo"
          height="60"
        />
      </Box>

      <Typography variant="h4" gutterBottom>
        Welcome to QuickCRM
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Please sign in with your Office 365 account to continue.
      </Typography>

      <Button
        onClick={handleLogin}
        variant="contained"
        size="large"
        sx={{ textTransform: 'none', px: 4 }}
      >
        Login via Office 365
      </Button>
    </Container>
  );
}
