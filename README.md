# Basic online calculator
- all frontend files are served to the browser by IIS, from windows
- the frontend (made with React) communicates with the backend (made with Node.js) through fetch requests
- the operation can either be calculated locally, or
- if a checkbox is true, two numbers and an operation string are sent to the server, which sends back the result as response
- the server also writes all operations in an SQL database (or a JSON file), and sends back/ or deletes the history when requested
- when the frontend receives a result, a getHistory request is also made
- the server sends back the history, and React is updating the page.

![new css - copy](https://user-images.githubusercontent.com/45050079/48517062-cccf0a00-e86d-11e8-82c5-16e7f5dc6b3c.png)
