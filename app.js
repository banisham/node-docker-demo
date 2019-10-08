const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Version 4. Latest 4 !!!');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});