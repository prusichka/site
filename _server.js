const express =     require('express');
const path = require('path');

const httpPort = 3005;

const app = express();

app.use(express.static(path.join(__dirname, '_public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '_public/index.html'));
});

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`);
});