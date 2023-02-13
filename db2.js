var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb",
});

// connexction à la DataBase
db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");

	// creation d'une DataBase
	db.query("CREATE DATABASE mydb", function (err, result) {
		if (err) throw err;
		console.log("Database created");
	});
});
