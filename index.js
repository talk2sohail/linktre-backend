const express = require("express");
const app = express();
const path = require("path");

app.use("/api", require("./routes"));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Node App running at ${port}`));
