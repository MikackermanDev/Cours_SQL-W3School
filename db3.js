var mysql = require("mysql");

var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb",
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});
