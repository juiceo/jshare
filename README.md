<div align="center">
  <h1>JShare Monorepo</h1>
  <p>Monorepo for the JShare expense tracking app</p>
  <img src="https://github.com/juiceo/jshare-monorepo/actions/workflows/test.yml/badge.svg?branch=main" />
</div>
<p></p>

![6 5_ App previews (1242 x 2688)](https://github.com/user-attachments/assets/785872b7-4974-4f94-8a17-76879fccd288)


## What is JShare?

JShare is the ultimate application for keeping track of who paid for what and who owes who, for example when travelling with a group of friends. The name is derived from the WeShare app, which was originally created by Danske Bank / MobilePay, and was the de facto application for tracking expenses. WeShare was sadly shut down in 2022 when MobilePay merged with Vipps, and similar functionality was reintroduced later within the MobilePay application. Unfortunately the new version of it is somewhat of a UX disaster, and is missing many of the great features that made WeShare so popular.

JShare is a hobby project which aims to be the spiritual successor to WeShare. It's available on Android and iOS, is free to use and fully open source (and accepting contributions) and is the best way to keep track of your expenses. A web version may also be coming in the future.

## Features

-   Create groups with your friends and track expenses
-   Full-fledged group chat, with notifications, replies and reactions
-   Track payments made within the group
-   Keep track of who you owe, and who owes you - across all groups

#### Do you handle payments?

JShare is never involved in any monetary transactions. This is for a few reasons:

-   Open Banking is not so open in reality: good APIs for sending money between individuals either do not exist or have significant transaction fees
-   Most countries have a different system that is the de facto way to send money to other people. Most of the effort in developing this app would go towards building banking integrations.
-   This is a hobby project, and as such the software is provided as-is and without warranty. I don't want to spend my freetime figuring out where someone's money has disappeared 😄

However, I strongly believe that JShare can be very valuable despite not handling this last step of actually moving money around. Making and receiving payments is a vanishingly small part of the experience: the vast majority of your time will be used in adding expenses and keeping track of who paid for what. JShare aims to be the best experience on the market for that user job.

When the time comes to settle your expenses and pay or receive money from someone, you should use another app of your preference to make the transaction: MobilePay, Venmo, etc.

#### How is this different from Splitwise/Splid/etc.?

Honestly, I haven't done much feature comparison with these other apps. This is a hobby project built by one person, primarily because I find it fun and useful. It may well be that these other apps have some features that are missing from JShare (for now, at least).

Here's a few things that JShare can promise, though:

-   It will always be fully free to use
-   It's really good for the use cases that it's made for
-   All features are designed by users, for users - not because the app needs to generate revenue

## Design philosophy

From the start, the goal with building JShare has been to improve on all aspects of existing alternatives - especially in terms of user experience. Some high-level design goals have been:

-   Simple: all features should be distilled to the simplest possible form
-   Offline-first: the app should be fully usable whether you are online or not
-   Fast: optimistic updates over loading screens whenever possible
-   Useful: everyone working on the app is a power user themselves - and all features added to the app are things we want to see in it
-   Fun: financial apps are usually boring. Travelling with your friends is fun, and so should the apps you use during your travels

## How is it built?

At the core of JShare is a React Native application built with [Expo](https://expo.dev/), a Node.js server and [Supabase](https://www.supabase.com/) as the database layer. All of this lives in a PNPM / Turborepo monorepo. Strict-mode TypeScript everywhere!

### Monorepo structure

The monorepo contains two main folders:

-   `apps`: Any package that results in an application being deployed. For now, this contains `mobile` (The mobile application) and `server` (The backend server). Applications may never depend on other applications.
-   `packages`: Any package that is used as a dependency for other packages or applications. Packages may depend on other packages, but may never depend on anything inside the `apps` directory.

At the root, there are some monorepo-level scripts:

-   `lint`: Runs ESLint for all packages
-   `typecheck`: Runs the TypeScript compiler to typecheck all packages
-   `test`: Runs test suites for all packages
-   `build`: Builds all packages
-   `format:check`: Runs Prettier to check formatting for all packages
-   `format:write`: Runs Prettier to fix formatting for all packages

### Development environment

To develop and run the app locally, you will need:

-   Node.js 20.x (I recommend using e.g. [nodenv](https://github.com/nodenv/nodenv) to manage this automatically)
-   PNPM (https://pnpm.io/installation)
-   Mobile app: set up your environment for React Native development, see [Expo guide](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build)

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

This guide is incomplete, and will be continued...
