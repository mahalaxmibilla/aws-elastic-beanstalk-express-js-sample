const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD

app.get('/', (req, res) => res.send('Hello There final test !'));

=======
app.get('/', (req, res) => res.send('Hello there This is a sample'));
>>>>>>> main

app.listen(port);
console.log(`App running on http://localhost:${port}`);
