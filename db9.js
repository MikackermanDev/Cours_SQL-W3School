const monSQL = require("mySQL");

const con = monSQL.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb",
});

con.connect(function (err) {
	if (err) throw err;
	con.query(
		"SELECT * FROM customers WHERE address = 'Park Lane 38'",
		function (err, result) {
			if (err) throw err;
			console.log(result);
			con.query(
				"SELECT * FROM customers WHERE address LIKE 'S%'",
				function (err, resultat) {
					if (err) throw err;
					console.log(resultat);
				}
			);
		}
	);
});
