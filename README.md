<div align="center">
  <h1>JShare monorepo</h1>
  <p>Monorepo for the JShare expense tracking app</p>
</div>

## What is JShare?

JShare is the ultimate application for keeping track of who paid for what and who owes who, for example when travelling with a group of friends. The name is derived from the WeShare app, which was originally created by Danske Bank / MobilePay, and was the de facto application for tracking expenses. WeShare was sadly shut down in 2022 when MobilePay merged with Vipps, and similar functionality was reintroduced later within the MobilePay application. Unfortunately the new version of it is somewhat of a UX disaster, and is much different from the WeShare that was loved by many.

JShare is a hobby project which aims to be the spiritual successor to WeShare. It's available on Android and iOS, is free to use and fully open source (and accepting contributions) and is the best way to keep track of your expenses. A web version may also be coming in the future. 

## Features

- Create groups with your friends and track expenses
- Full-fledged group chat, with notifications, replies and reactions
- Track payments made within the group
- Keep track of who you owe, and who owes you - across all groups

## Do you handle payments?

JShare is never involved in any monetary transactions. This is for two reasons: 

- Open Banking is not so open in reality: good APIs for sending money between individuals either do not exist, or are prohibitively expensive
- Even if that was possible: most countries have a different system that is the de facto way to send money to other people. Most of the effort in developing this app would go towards building banking integrations.
- Most people would have a hard time trusting their card or bank details to some random open source application
- This is a hobby project, and as such the software is provided as-is and without warranty. I don't want to spend my freetime figuring out where someone's money has disappeared :D

However, I strongly believe that JShare can be very valuable despite not being able to handle this last step of actually moving money around. Actually making the transaction is a vanishingly small part of the experience: the vast majority of your time will be used in adding expenses and keeping track of who paid for what. JShare aims to be the best experience on the market for that user job.

When the time comes to settle your expenses and pay or receive money from someone, you should use another app of your preference to make the transaction: MobilePay, Venmo, etc.

## Design philosophy

From the start, the goal with building JShare has been to improve on all aspects of existing alternatives - especially in terms of user experience. Some high-level design goals have been:

- Simple: all features should be distilled to the simplest possible form, no over-engineering
- Offline-first: the app should be fully usable whether you are online or not
- Fast: optimistic updates over loading screens whenever possible
- Useful: everyone working on the app is a power user themselves - and all features added to the app are things we want to see in it
- Fun: financial apps are usually boring. Travelling with your friends is fun, and so should the apps you use during your travels

## How is it built?

At the core of JShare is a React Native application built with [Expo](https://expo.dev/), a Node.js server and [InstantDB](https://www.instantdb.com/) as the database. All of this lives in a PNPM / Turborepo monorepo. Strict-mode TypeScript everywhere!

### Monorepo structure

The monorepo contains two main folders: 

- `apps`: Any package that results in an application being deployed. For now, this contains `mobile` (The mobile application) and `server` (The backend server). Applications may never depend on other applications.
- `packages`: Any package that is used as a dependency for other packages or applications. Packages may depend on other packages, but may never depend on anything inside the `apps` directory.

At the root, there are some monorepo-level scripts: 

- `lint`: Runs ESLint for all packages
- `typecheck`: Runs the TypeScript compiler to typecheck all packages
- `test`: Runs test suites for all packages
- `build`: Builds all packages
- `format:check`: Runs Prettier to check formatting for all packages
- `format:write`: Runs Prettier to fix formatting for all packages

### Development environment

To develop and run the app locally, you will need:

- Node.js 20.x (I recommend using e.g. [nodenv](https://github.com/nodenv/nodenv) to manage this automatically)
- PNPM (https://pnpm.io/installation)
- Mobile app: set up your environment for React Native development, see [Expo guide](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build)

When you have the prerequisites installed on your system, clone the repository and install dependencies to get started: 

```bash
git clone git@github.com:juiceo/jshare-monorepo.git
cd jshare-monorepo
pnpm install
```

### Running the app

Once you have the environment set up, you can create the first development build on your device:

```bash
pnpm dev:mobile
cd apps/mobile
pnpm ios
```

This guide is incomplete, and will be continued.
