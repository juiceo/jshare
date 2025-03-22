-   Your groups
    [x] Show list of groups you are a member of
    [x] Show empty state when no groups

-   Group home page
    [x] If no other members, show empty state (invite code). Could make sense that this is always rendered at the top of the messages list, so you can find it when scrolling up

-   Profile page
    [x] Implement bottom tab navigation
    [x] Implement simple profile page

-   Group settings
    [x] Settings only accessible to group admins
    [x] Show invite code / invite link in group settings
    [ ] Allow changing user roles
    [ ] Allow removing users from group
    [ ] Allow assigning expenses from temporary users to group members

-   Join group
    [x] Implement "join with code" flow

-   Temporary users
    [ ] Add ability to create temporary users in group
    [ ] When joining a group, allow the user to claim expenses from temporary users

-   RELEASE BLOCKERS

    [x] Keyboard avoiding views not working correctly
    [x] Audit all cases where we mutate data -> should have appropriate optimistic updates / query invalidation
    [ ] Add "lastActivity" to groups, use it to sort groups on the home page
    [ ] Add "lastActive" to users, use it sort users on the group settings page
    [x] Add Kazakhstan to the list of supported currencies, update exchange rates
    [x] Fix issue with cents field in the expense form
