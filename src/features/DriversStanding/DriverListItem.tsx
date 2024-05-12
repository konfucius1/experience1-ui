import { Card, Stack, Group, Title, Flex, Text, Badge } from '@mantine/core';

export type Driver = {
  position: string;
  constructorsName: string;
  permanentNumber: string;
  nationality: string;
  givenName: string;
  familyName: string;
  wins: string;
  points: string;
};

export function DriverListItem(driver: Driver) {
  return (
    <Card radius="md" shadow="md">
      <Stack>
        <Group justify="space-between">
          <Title>{driver.position}</Title>
          <Flex direction="column" align="center">
            <Text>{driver.points}</Text>
            <Badge variant="light">PTS</Badge>
          </Flex>
        </Group>
        <Flex justify="space-between" align="center">
          <Flex direction="column">
            <Text>{driver.givenName.toUpperCase()}</Text>
            <Text fw={800} size="xl">
              {driver.familyName.toUpperCase()}
            </Text>
          </Flex>
          <Text fw={800}>{driver.nationality.slice(0, 3).toUpperCase()}</Text>
        </Flex>
        {/* <p>{driver.wins}</p> */}
        <Group justify="space-between">
          <Text>{driver.constructorsName}</Text>
          <Text>#{driver.permanentNumber}</Text>
        </Group>
      </Stack>
    </Card>
  );
}
