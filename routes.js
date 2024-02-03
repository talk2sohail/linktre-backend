require("dotenv").config();
const express = require("express");
const router = express.Router();
const { jobs_collection } = require("./db.js");

router.get("/jobs", function (req, res) {
	jobs_collection
		.then(function (c) {
			if (c) {
				const data = c.documents.map(function (job) {
					return {
						role: job.job_name,
						status: job.active ? "active" : "inactive",
					};
				});
				res.status(200).send({
					count: c.total,
					data: data,
				});
			}
		})
		.catch(function (e) {
			console.log("Collection fetch failed, error: ", e);
			res.status(404).send({
				message: "NO DATA",
				success: "false",
			});
		});
});

module.exports = router;
