```mermaid
sequenceDiagram
    

    User->>Browser: writing new note
    User->>Browser: click on Save button
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note right of Browser: Browser appends the note inside the payload
    Server-->>Browser: 201 created
    

```