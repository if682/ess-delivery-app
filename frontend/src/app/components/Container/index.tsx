import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: 'white', height: '100vh' }} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', padding: '40px', alignItems: 'flex-start'}}>
          { children }
        </Box>
      </Container>
    </>
  );
}