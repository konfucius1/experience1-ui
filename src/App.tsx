import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Router } from './routes/Router';
// 👇 Import the mantine-core layer CSS file;
//    this will automatically place it in a `mantine` layer
import '@mantine/core/styles.layer.css';

// 👇 Import the mantine-datatable layer CSS file;
//    this will automatically place it in a `mantine-datatable` layer
import 'mantine-datatable/styles.layer.css';
import { deepBlue } from './components/ColorTheme/team';

export default function App() {
  const [primaryColorStored] = useLocalStorage({
    key: 'primary-color',
    defaultValue: 'blue',
  });

  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    primaryColor: primaryColorStored,
    colors: {
      deepBlue,
    },
  });
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
