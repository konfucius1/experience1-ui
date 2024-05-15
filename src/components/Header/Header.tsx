import { useState } from 'react';
import { Container, Group, Burger, Text, Flex, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconGauge } from '@tabler/icons-react';
import classes from './Header.module.css';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const links = [
  { link: '/standing', label: 'Drivers Standing' },
  { link: '/drivers', label: 'Drivers' },
  { link: '/schedule', label: 'Schedule' },
  { link: '/results', label: 'Results' },
];

export function Header() {
  const { colors, primaryColor } = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      color={colors[primaryColor][6]}
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Flex gap="xs" align="center">
          <Text fw={550}>Experience1</Text>
          <IconGauge color={colors[primaryColor][6]} size={28} />
        </Flex>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Group>
          <ColorSchemeToggle />
          <ThemePicker />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
