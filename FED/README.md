# JSS Starter

This project is intended to be a "quick-start" guide for new NextJS projects; it contains sample components and technology demonstrations that can be used as needed in your NextJS project.

The JSS Starter is intended to integrate directly with Sitecore in a headless configuration, but also includes Storybook 7 to allow for component development in an isolated environment. Storybook components are fully documented as part of their respective stories and each story allows for component props to be modified in real time allowing for a component's features to be explored.

The JSS Starter also relies upon industry-standard technologies like Tailwind for clean, efficient CSS development, Jest for unit testing, Husky for ensuring code validation, and Typescript for writing strongly typed JavaScript components.

Creating new projects from the JSS Starter can be as simple as forking the project's repo into a new repository, but can also be used as a reference and copied as needed into an existing project.

## Getting Started

### Requirements

- [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM)

#### Package Management

This project has been made compatible with multiple package management solutions; [NPM](https://docs.npmjs.com), [PNPM](https://pnpm.io/), [Yarn](https://yarnpkg.com/), etc. can be used in place of NPM if desired. For the sake of simplicity, NPM is used throughout the remainder of this document.

### Installation and Setup

1. Install NVM. (Not required if PNPM or Yarn are used.)

   ```
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
   ```

1. Install Node.

   ```
   $ nvm install X.X.X
   $ nvm use X.X.X
   ```

   **NOTE:** Check that the installed version of Node matches the minimum required by the project. See the "engine" property of the _package.json_.

   **NOTE:** `nvm use X.X.X` will set the active Node version for the duration of the session. To change the default version of Node, use `nvm alias default X.X.X`.

1. Install project dependencies.

   ```
   $ npm install
   ```

### Building and Running the Project

- `npm run storybook` will start Storybook in disconnected (local) mode.
- `npm run start:connected` will start the project in connected mode. (Requires an XM Cloud or remote Sitecore 1.03 instance.)
- `npm run test` will execute the project's Jest test suite.

### Visual Unit Testing

This project includes visual unit testing via [BackstopJS](https://github.com/garris/BackstopJS/blob/master/README.md). To execute the test suite and approve changes, take the following steps:

1. Install dependecies:

   - [Docker](https://www.docker.com/get-started/)

1. Start Storybook

   ```
   $ npm run storybook
   ```

1. Execute the BackstopJS test suite

   ```
   $ npm run backstop-test
   ```

1. Review and approve all changes
   ```
   $ npm run backsotp-approve
   ```
