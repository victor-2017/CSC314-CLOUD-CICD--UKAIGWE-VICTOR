const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const responseText = "THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS.<br>NAME - RITJI JOHN GOFWEN. MAT NO - VUG / CSC / 21 / 5440";
    res.send(responseText);
}); 
app.listen(port);
console.log(`App running on http://localhost:${port}`);
