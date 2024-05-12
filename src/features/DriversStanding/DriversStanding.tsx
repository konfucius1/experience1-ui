import { Container, Flex, SimpleGrid, Stack, Tabs, Text, Title } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import standings from './mockdata.json';
import { DriverListItem } from './DriverListItem';

export function DriversStanding() {
  const driverStandings = standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  const drivers = driverStandings.map((driver) => ({
    position: driver.position,
    constructorsName: driver.Constructors[0].name,
    permanentNumber: driver.Driver.permanentNumber,
    nationality: driver.Driver.nationality,
    givenName: driver.Driver.givenName,
    familyName: driver.Driver.familyName,
    wins: driver.wins,
    points: driver.points,
  }));

  const columns = Object.keys(drivers[0]).map((key) => {
    if (key === 'permanentNumber') {
      return { accessor: key, title: 'Driver no.' };
    }

    return {
      accessor: key,
    };
  });

  return (
    <Container my="xl">
      <Stack gap="xl">
        <Title>Drivers Standing</Title>

        <Tabs variant="pills" radius="md" defaultValue="grid">
          <Flex align="center" gap="md">
            <Text>Select view</Text>
            <Tabs.List>
              <Tabs.Tab value="grid">Grid</Tabs.Tab>
              <Tabs.Tab value="table">Table</Tabs.Tab>
            </Tabs.List>
          </Flex>

          <Tabs.Panel value="grid" my="xl">
            <SimpleGrid cols={3}>
              {drivers.map((driver) => (
                <DriverListItem key={driver.position} {...driver} />
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="table" my="xl">
            <DataTable columns={columns} records={drivers} striped />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
}
