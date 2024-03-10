```mermaid
sequenceDiagram
   
    User->>Browser: Enter the url: https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa

    Server-->>Browser: HTML Document

    Browser-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
    Browser-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa/script.js
    Browser-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa/data.json
    Server-->>Browser: Parses json response and displays the notes



```