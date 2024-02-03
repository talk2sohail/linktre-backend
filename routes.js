require("dotenv").config();
const express = require("express");
const router = express.Router();
const { get_job_data } = require("./db.js");

router.get("/jobs", async function (req, res) {
	const response = await get_job_data();
	if (response.ok) {
		res.status(200).send({
			data: response,
		});
		return;
	}

	res.status(404).send({
		message: "no data",
	});
});

module.exports = router;
