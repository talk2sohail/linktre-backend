const express = require("express");
const app = express();

app.use("/api", require("./routes"));
app.get("*", (req, res) => {
	res.status(404).send({
		message: "API Not Available",
		code: 404,
	});
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Node App running at ${port}`));
