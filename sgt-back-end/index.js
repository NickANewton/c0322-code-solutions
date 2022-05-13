const express = require('express');
const app = express();

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
  from "grades"
`;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  const requiredFields = ['name', 'course', 'score'];
  for (let i = 0; i < requiredFields.length; i++) {
    if (!req.body[requiredFields[i]]) {
      res.status(400).json({
        error: `${requiredFields[i]} is a required field`
      });
      return;
    }
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
  const params = [req.body.name, req.body.course, req.body.score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const requiredFields = ['name', 'course', 'score'];
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `${gradeId} must be a postive integer`
    });
    return;
  }
  for (let i = 0; i < requiredFields.length; i++) {
    if (!req.body[requiredFields[i]]) {
      res.status(400).json({
        error: `${requiredFields[i]} is a required field`
      });
      return;
    }
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  }
  const sql = `
    update "grades"
      set "name"   = $2,
          "course" = $3,
          "score"  = $4
    where "gradeId" = $1
    returning *
    `;
  const params = [gradeId, req.body.name, req.body.course, req.body.score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `${gradeId} must be a postive integer`
    });
    return;
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
