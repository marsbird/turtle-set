import express from 'express';
import { resolve } from 'path';

const app = express();
const PORT = 3000;

app.use(json());

app.use(express.static(resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  res.status(200).sendFile(resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
