-   Add realtime to chat
    [x] Layout animations when sending / receiving new messages
    [x] Should use infinite query for getting messages
    [x] Messages you send should appear immediately in the chat (optimistic updates)
    [x] Messages you receive should appear in the chat immediately (websockets)

-   Create expense view
    [x] Created expense should trigger a message in the chat with the expense details
    [x] Add text field for expense description (max chars e.g. 100)
    [x] Improve "realtime sync" - broadcast listener should be at root level and just invalidate the appropriate queries
    [x] Add "New expense" and "New payment" buttons to bottom of chat view

-   Expense summary view
    [x] Add expense summary view
    [x] Add tag to chat view header to show current balance for user
    [x] Use same tag element in group cards

-   Exchange rates
    [x] Expenses should keep track of which currency they are in, the exchange rate vs. group currency, and the converted amount
    [x] Group statuses should always be in the group currency
    [x] User should have a preferred currency, which is used by default for all new groups
    [x] User should be able to change their preferred currency
    [x] The user's own balance should be in the user's preferred currency

-   DEV TODOs:

    [ ] Use zenstack zmodel language for schema definition
    [ ] Define ConversionDetails and CurrencyCode types in prisma schema
    [ ] Generate zod types from zmodel schema
    [ ] Add @anatine/zod-mock to generate mocks instead of @jshare/types/mocks
    [ ] Remove @jshare/types package
    [ ] Remove @jshare/util package, move under @jshare/common

-   Add payments feature
    [ ] Create DB model for payments
    [ ] Add screen for creating new payments
    [ ] When new payments are created, a system message should be sent to the group chat
    [ ] Expense calculations should take into account payments

-   Expense settlement
    [x] Add settle up button to expense summary view
    [ ] Add settle up view which shows who should pay what to whom
    [ ] Add possibility to mark payments as paid in settle up view
    [ ] When payments are marked as paid, a corresponding Payment should be created in the database

-   Group summary
    [ ] Add react-native-collapsible-tab-view to summary screen
    [ ] Add tab for expenses
    [ ] Add tab for payments

-   Group settings
    [ ] Settings only accessible to group admins
    [ ] Show invite code / invite link in group settings
    [ ] Allow changing user roles
    [ ] Allow removing users from group
    [ ] Allow assigning expenses from temporary users to group members

-   Join group
    [ ] Implement "join with code" flow

-   Temporary users
    [ ] Add ability to create temporary users in group
    [ ] When joining a group, allow the user to claim expenses from temporary users
