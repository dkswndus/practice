const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/login', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
  res.render('login', { data });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
