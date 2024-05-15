import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="md"
      aria-label="Toggle color scheme"
    >
      <IconSun size="1.1rem" className={cx(classes.light)} stroke={1.5} />
      <IconMoon size="1.1rem" className={cx(classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
