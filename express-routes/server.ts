import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('number 1');
});

app.get('/notes', (req, res) => {
  res.send('number 2');
});

app.post('/notes/123', (req, res) => {
  res.send('number 3');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
