const express = require('express');
const app = express();
const port = process.env.port || 8080;
app.use(express.static("public"))
app.get('/', (req, res) => res.send("THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS. NAME -- ukaigwe victor.MAT NO -- VUG / CSC / 21 / 5173"));



app.listen(port);
console.log(`App running on http://localhost:${port}`);
