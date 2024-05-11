# Experience 1 UI

This web application is designed as a comprehensive resource for Formula 1 enthusiasts to explore detailed race information, driver statistics, and team comparisons. This project is a personal endeavor aimed at combining a passion for Formula 1 with the capabilities of modern web technologies. Currently, this is a proof of concept, further development is required to make this a fully functional application. The use of Server-Side Rendering is considered for future iterations to improve the application.

## Features

- Race Results: View detailed results from current and past Formula 1 races.
- Driver and Car Data: Access comprehensive data on drivers and their cars, including performance metrics for the current year (2024) and historical data.
  Race Calendar: Explore the schedule of upcoming races, with details on times and locations.
- Historical Data: Look back at past seasons to see race outcomes and season standings.
- Driver Profiles: Get detailed information on each driver, including career statistics and current season performance.
- Team Information: Analyze head-to-head comparisons and team histories.
- Statistics and Charts: Visualize data through charts that compare speed, pole positions, and other critical racing statistics.

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## yarn scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

## Contributions

As this is a hobby project, contributions, suggestions, and feedback are highly welcomed to enhance the application’s features and performance.
