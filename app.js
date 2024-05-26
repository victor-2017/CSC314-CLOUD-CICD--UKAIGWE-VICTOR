const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.get('/', (req, res) => {
    const responseText = "THIS IS CSC 314 CLOUD COMPUTING DEVOPS";
    res.send(responseText);
}); 
app.listen(port);
console.log(`App running on http://localhost:${port}`);
