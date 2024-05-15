import { ActionIcon, Menu, useMantineTheme } from '@mantine/core';
import { IconPalette } from '@tabler/icons-react';
import { ColorTheme } from '../ColorTheme/ColorTheme';

export function ThemePicker() {
  const { primaryColor } = useMantineTheme();
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="outline" color={primaryColor} title="Change theme">
          <IconPalette size="1.1rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <ColorTheme />
      </Menu.Dropdown>
    </Menu>
  );
}
