import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import { Outlet } from '@remix-run/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Outlet />
        <Copyright />
      </Box>
    </Container>
  );
}
