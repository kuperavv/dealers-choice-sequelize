const express = require('express');
const { sync } = require('./db');
const router = require('./public/pages');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));
app.use('/', router);

const init = async () => {
  try {
    await sync();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening in port ${3000}`));
  } catch (er) {
    console.log(er);
  }
};

init();
