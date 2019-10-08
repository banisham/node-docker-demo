const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Version 5. Latest 5 !!!');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});