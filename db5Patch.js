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
	var sql = "UPDATE customers SET isDeleted='1' WHERE id=41";
	var values = [];
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records update: " + result.affectedRows);
	});
});
