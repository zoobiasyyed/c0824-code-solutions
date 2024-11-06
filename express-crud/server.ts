import { ClientError, errorMiddleware } from './lib';
import express from 'express';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    select "name", "gradeId"
    from "grades"
    Where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!Number.isInteger(+score) || score > 100 || score < 0)
      throw new ClientError(400, `${score} not valid`);
    if (!name) throw new ClientError(400, ` ${name} not valid`);
    if (!course) throw new ClientError(400, ` ${course} not valid`);
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const { name, course, score } = req.body;
    if (!Number.isInteger(+score) || score > 100 || score < 0)
      throw new ClientError(400, `${score} not valid`);
    if (!name) throw new ClientError(400, ` ${name} not valid`);
    if (!course) throw new ClientError(400, ` ${course} not valid`);
    const sql = `
    update "grades"
    SET "name" = $2, "course" = $3, "score" = $4
    WHERE "gradeId" = $1
    returning *;
    `;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} does not exist`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    DELETE FROM "grades"
    WHERE "gradeId" = $1
    returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} does not exist`);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);
app.listen(8080, () => {
  console.log('listening on port 8080');
});
