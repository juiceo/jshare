-   Add realtime to chat
    [x] Layout animations when sending / receiving new messages
    [x] Should use infinite query for getting messages
    [x] Messages you send should appear immediately in the chat (optimistic updates)
    [x] Messages you receive should appear in the chat immediately (websockets)

-   Create expense view
    [x] Created expense should trigger a message in the chat with the expense details
    [x] Add text field for expense description (max chars e.g. 100)
    [ ] Improve "realtime sync" - broadcast listener should be at root level and just invalidate the appropriate queries
    [ ] Add "New expense" and "New payment" buttons to bottom of chat view

-   Expense summary view
    [ ] Add expense summary view
    [ ] Add tag to chat view header to show current balance for user
    [ ] Use same tag element in group cards
