const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => res.send(' THIS IS CSC 314 CLOUD COMPUTING DEVOPS ; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS. NAME - RITJI JOHN GOFWEN. MAT NO - VUG/CSC/21/5440'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
