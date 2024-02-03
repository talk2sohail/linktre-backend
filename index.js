const sdk = require("node-appwrite");

const client = new sdk.Client();

const SECRET = {
	PROJECT_ID: process.env.PROJECT_ID,
	API_KEY: process.env.API_KEY,
	DATABASE_ID: process.env.DATABASE_ID,
	COLLECTION_ID: process.env.COLLECTION_ID,
	DB_URL: process.env.DB_URL || "https://cloud.appwrite.io/v1",
};

client
	.setEndpoint(SECRET.DB_URL)
	.setProject(SECRET.PROJECT_ID)
	.setKey(SECRET.API_KEY);

const databases = new sdk.Databases(client);

function getJobs() {
	var jobs = databases.listDocuments(SECRET.DATABASE_ID, SECRET.COLLECTION_ID);

	jobs.then(
		function (jobs) {
			console.log("============JOBS DATA===============");
			jobs.documents.forEach(function (job) {
				console.log(`Role: ${job.job_name}`);
				const status = job.active ? "Active" : "InActive";
				console.log(`Status: ${status}`);
			});
		},
		function (error) {
			console.log(error);
		}
	);
}

function runAllTasks() {
	getJobs();
}
runAllTasks();
