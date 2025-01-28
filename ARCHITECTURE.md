## Architecture overview

JShare is built with the following technologies:

-   React Native (Expo) for the mobile app
-   Node.js + Express for server-side logic
-   Supabase for database and authentication
-   Prisma for database schema and ORM
-   Turborepo to manage the monorepo

### Environments

#### Local development

The most important environment is the local development environment. A big design goal of JShare has been to make the local development setup a one-click experience, and to have it match the production environment as closely as possible.

Setting up the local environment should be as simple as:

-   Cloning the repository
-   Running `pnpm install` to install dependencies
-   Running `pnpm db:reset` to seed the database
-   Running `pnpm dev` to start the development server

Under the hood, `pnpm dev` will start everything necessary to run the app in development mode:

-   The Supabase local development suite (Auth, Supabase Studio, Image transformations, etc.)
-   Watch and bundle all packages in the monorepo
-   Runs the backend server in development mode
-   Runs the mobile app in development mode

#### Staging

The staging environment is used to verify that the app works as expected in a production-like environment.

The latest code is always automatically deployed to the staging environment when new code is pushed to the `main` branch. The staging environment is composed of:

-   It's own supabase instance (separate from the production supabase instance and database)
-   Backend hosted on Render
-   Expo development build of the mobile app

#### Production

To-be-determined
