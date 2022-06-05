
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const DB = require('./db');

app.get('/', async (req, res) => {

	const [ messages ] = await DB.pool.query('SELECT * FROM message');

	return res.send(messages);
});

app.listen(port, () => {
  console.log(`Node Mysql Test app listening on port ${port}`);
});
