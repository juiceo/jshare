-   Add realtime to chat
    [x] Layout animations when sending / receiving new messages
    [x] Should use infinite query for getting messages
    [x] Messages you send should appear immediately in the chat (optimistic updates)
    [x] Messages you receive should appear in the chat immediately (websockets)

-   Add create expense view
    [x] Created expense should trigger a message in the chat with the expense details
    [ ] Add text field for expense description (max chars e.g. 100)
    [ ] Improve "realtime sync" - broadcast listener should be at root level and just invalidate the appropriate queries
