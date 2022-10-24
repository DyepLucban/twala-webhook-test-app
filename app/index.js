const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signed', (req, res) => {
  console.log(req.body);
  res.send(true);
})

app.post('/cancelled', (req, res) => {
  console.log(req.body);
  res.send(true);
})

app.post('/completed', (req, res) => {
  console.log(req.body);
  res.send(true);
})

app.post('/sent', (req, res) => {
  console.log(req.body);
  res.send(true);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
