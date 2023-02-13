var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb",
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	var sql = "ALTER TABLE customers DROP COLUMN isDeleted";
	var sql = "ALTER TABLE customers ADD COLUMN isDeleted BOOLEAN DEFAULT 0 NOT NULL";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table altered");
	});
});
