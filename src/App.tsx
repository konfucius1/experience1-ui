import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Router } from './Router';
// 👇 Import the mantine-core layer CSS file;
//    this will automatically place it in a `mantine` layer
import '@mantine/core/styles.layer.css';

// 👇 Import the mantine-datatable layer CSS file;
//    this will automatically place it in a `mantine-datatable` layer
import 'mantine-datatable/styles.layer.css';

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
