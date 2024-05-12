import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Router } from './Router';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  primaryColor: 'cyan',
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
