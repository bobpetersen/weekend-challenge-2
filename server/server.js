const express = require('express');
const bodyParser = require('body-parser');
const calc_data = require('./modules/calc_data');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/all-maths', (req, res) => {
  res.send(calc_data);
});
app.post('/addition', (req, res) => {
  let x = +req.body.x; //The + is the same as Number($('#inputX').val());
  let y = +req.body.y;
  let result = { result: x + y };
  let resultValue = { x: x, action: '+', y: y, result: x + y };
  calc_data.push(resultValue);
  console.log(result);
  res.send(result);
});

app.post('/subtract', (req, res) => {
  let x = +req.body.x; 
  let y = +req.body.y;
  let result = { result: x - y };
  let resultValue = { x: x, action: '-', y: y, result: x - y };
  calc_data.push(resultValue);
  console.log(result);
  res.send(result);
});

app.post('/multiply', (req, res) => {
  
  let x = +req.body.x; 
  let y = +req.body.y;
  let result = { result: x * y };
  let resultValue = { x: x, action: '*', y: y, result: x * y };
  calc_data.push(resultValue);
  console.log(result);
  res.send(result);
});

app.post('/division', (req, res) => {
 
  let x = +req.body.x; 
  let y = +req.body.y;
  let result = { result: x / y };
  let resultValue = { x: x, action: '/', y: y, result: x / y };
  calc_data.push(resultValue);
  console.log(result);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
