'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { Button, Container, Typography, Box } from '@mui/material';

export default function LoginLandingPage() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  const handleLogin = () => {
    instance.loginRedirect({
      redirectUri: '/dashboard',
      scopes: [],
    });
  };

  // ✅ Redirect to /dashboard if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, router]);

  // ✅ Prevent flicker of login screen for logged-in users
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
          src="/images/logos/dark-logo.svg"
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
