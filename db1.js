const monSQL = require("mySQL");

const db = monSQL.createConnection({
	host: "localhost",
	user: "root",
	password: "",
});

// connexion à la DataBase
db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});
