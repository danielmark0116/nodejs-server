const express = require('express');
const colors = require('colors');
const app = express();

const port = 8000;

app.use('/', (req, res) => {
  res.send('Hello world from app');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`.green);
});
