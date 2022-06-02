
const mysql = require('mysql2/promise');
const db_config = require('./db_config.json');

const pool = mysql.createPool({
	host: db_config.host,
	user: db_config.user,
	password: db_config.password,
	database: db_config.database,
});

module.exports = {
	pool,
};
