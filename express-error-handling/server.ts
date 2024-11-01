import express from 'express';
import { errorMiddleware, ClientError } from './lib/index.js';

type Note = {
  id: number;
  content: string;
};

const app = express();

app.get('/api/notes', async (req, res, next) => {
  try {
    const notes = await readNotes();
    res.send(notes);
  } catch (err) {
    next(err);
    console.error(err);
    res.status(500).send({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/notes', async (req, res, next) => {
  try {
    const { content } = req.query;
    if (content === undefined) {
      throw new ClientError(400, 'content is required');
    }
    const note = {
      id: Math.floor(100 * Math.random()),
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    next(err);
    console.error(err);
    res.status(500).send({ error: 'an unexpected error occurred' });
  }
});

app.put('/api/notes', async (req, res, next) => {
  try {
    const { id, content } = req.query;
    if (id === undefined) {
      throw new ClientError(400, 'id is required');
    }
    if (content === undefined) {
      res.status(400).send({ error: 'content is required' });
      return;
    }
    const note = {
      id: +id,
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    next(err);
    console.error(err);
    res.status(500).send({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/notes', async (req, res, next) => {
  try {
    const { id } = req.query;
    if (id === undefined) {
      throw new ClientError(400, 'id is required');
    }
    await deleteNote(+id);
    res.send(`deleted ${id}`);
  } catch (err) {
    next(err);
    console.error(err);
    res.status(500).send({ error: 'an unexpected error occurred' });
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

//* **** Mock data handling functions

async function readNotes(): Promise<Note[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve([
            { id: 8, content: 'Error handling middleware is great' },
            { id: 12, content: 'Express is easy!' },
            { id: 3, content: 'Simplicity itself' },
          ])
        : reject(new Error('What bad luck! Read error.'));
    }, 10);
  });
}

async function writeNote(note: Note): Promise<Note> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(note)
        : reject(new Error('What bad luck! Write error.'));
    }, 10);
  });
}

async function deleteNote(id: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(id)
        : reject(new Error('What bad luck! Delete error.'));
    }, 10);
  });
}
