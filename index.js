const express = require('express');
const bodyParser = require('body-parser');
const changeStatus = require('./middlewares/changeStatus');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('oi');
});

app.put('/user/:id', changeStatus);

app.listen(PORT, () => {
  console.log('Conectado na porta 3000');
});
