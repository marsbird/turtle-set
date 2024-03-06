const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello Mars <3');
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
