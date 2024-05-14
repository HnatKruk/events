import { Container } from '@mui/material';

export const LayoutApp = ({ children }) => (
  <Container maxWidth='lg' sx={{ py: 6, minHeight: '100vh' }} >
    {children}
  </Container>
);
