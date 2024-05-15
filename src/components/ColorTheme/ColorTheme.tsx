import {
  ColorSwatch,
  DefaultMantineColor,
  Group,
  MantineColorsTuple,
  Menu,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { teams } from './team';

type ColorThemeItemProps = {
  team: {
    value: string;
    label: string;
    color: string;
  };
  setPrimaryColorStored: (color: string) => void;
  colors: Record<DefaultMantineColor, MantineColorsTuple>;
};

function ColorThemeItem({ team, setPrimaryColorStored, colors }: ColorThemeItemProps) {
  return (
    <Menu.Item
      onClick={() => {
        setPrimaryColorStored(team.color);
      }}
    >
      <Group>
        <ColorSwatch size="1.1rem" color={colors[team.color][6]} />
        <Text size="xs">{team.label}</Text>
      </Group>
    </Menu.Item>
  );
}

export function ColorTheme() {
  const { colors } = useMantineTheme();

  const [, setPrimaryColorStored] = useLocalStorage({
    key: 'primary-color',
  });
  return (
    <>
      {teams.map((team) => (
        <ColorThemeItem
          key={team.value}
          team={team}
          setPrimaryColorStored={setPrimaryColorStored}
          colors={colors}
        />
      ))}
    </>
  );
}
