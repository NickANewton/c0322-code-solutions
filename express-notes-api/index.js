const fs = require('fs');
const express = require('express');
const app = express();
const data = require('./data.json');
const nextId = data.nextId;
const errorMessage = {
  error: null
};

app.get('/api/notes', (req, res) => {
  const arrayOfNotes = [];
  for (const key in data.notes) {
    arrayOfNotes.push(data.notes[key]);
  }
  res.status(200).json(arrayOfNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 0) {
    errorMessage.error = 'id must be a positive integer';
    res.status(400).json(errorMessage);
  } else if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  } else {
    errorMessage.error = `cannot find note with ${id}`;
    res.status(404).json(errorMessage);
  }
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    errorMessage.error = 'content is a required field';
    res.status(400).json(errorMessage);
  } else {
    data.notes[nextId] = req.body;
    data.notes[nextId].id = nextId;
    data.nextId++;
    const updatedObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', updatedObj, err => {
      if (err) {
        errorMessage.error = 'An unexpected error occurred.';
        console.error(err);
        res.status(500).json(errorMessage);
      } else {
        res.status(201).json(data.notes[nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 0) {
    errorMessage.error = 'id must be a positive integer';
    res.status(400).json(errorMessage);
  } else if (!data.notes[id]) {
    errorMessage.error = `cannot find note with ${id}`;
    res.status(404).json(errorMessage);
  } else {
    delete data.notes[id];
    const updatedObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', updatedObj, err => {
      if (err) {
        errorMessage.error = 'An unexpected error occurred.';
        console.error(err);
        res.status(500).json(errorMessage);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 0) {
    errorMessage.error = 'id must be a positive integer';
    res.status(400).json(errorMessage);
  } else if (!req.body.content) {
    errorMessage.error = 'content is a required field';
    res.status(400).json(errorMessage);
  } else if (!data.notes[id]) {
    errorMessage.error = `cannot find note with ${id}`;
    res.status(404).json(errorMessage);
  } else {
    data.notes[id] = req.body;
    data.notes[id].id = id;
    const updatedObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', updatedObj, err => {
      if (err) {
        errorMessage.error = 'An unexpected error occurred.';
        console.error(err);
        res.status(500).json(errorMessage);
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
