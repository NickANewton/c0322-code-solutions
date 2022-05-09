const express = require('express');
const app = express();
var nextId = 1;
const grades = {};

app.get('/api/grades', (req, res, next) => {
  const arrayOfGrades = [];
  for (var prop in grades) {
    arrayOfGrades.push(grades[prop]);
  }
  res.json(arrayOfGrades);
  next();
});

const json = express.json();
app.use(json);

app.post('/api/grades', (req, res) => {
  const obj = req.body;
  obj.Id = nextId;
  grades[nextId] = obj;
  res.status(201).send(obj);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
