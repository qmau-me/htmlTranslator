var translate = require("google-translate-api");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const port = 5432;

app.use(bodyParser.text({ type: "text/html" }));

app.post("/", (req, res) => {
	translate(req.body, { to: "vi" })
        .then(str => {
            ret = str.text.replace(new RegExp("</ ", 'g'), "</").replace(new RegExp("< ", "g"), "<");
            console.log("translating...");
            res.charset = 'utf-8';
			res.send(ret);
		})
		.catch(err => {
			console.error(err);
			res.send(err);
		});
});

app.listen(port, () => {
	console.log(`HTML translator listening on port ${port}!`);
});
