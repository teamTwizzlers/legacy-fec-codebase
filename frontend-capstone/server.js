const express = require('express');
var cors = require('cors')

const app = express();
const port = 3000;
const path = require('path');

app.use(cors())
app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);