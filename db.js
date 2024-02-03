const sdk = require("node-appwrite");

const client = new sdk.Client();

const { DB_URL, PROJECT_ID, API_KEY, DATABASE_ID, JOB_COLLECTION_ID } =
	process.env;

client.setEndpoint(DB_URL).setProject(PROJECT_ID).setKey(API_KEY);

const databases = new sdk.Databases(client);

module.exports = {
	get_job_data: async () => {
		const jobs_collection = await databases.listDocuments(
			DATABASE_ID,
			JOB_COLLECTION_ID
		);

		if (jobs_collection) {
			const data = jobs_collection.documents.map((job) => {
				return {
					role: job.job_name,
					status: job.active ? "active" : "inactive",
				};
			});

			return { ok: true, data: data };
		}

		return { ok: false, data: null };
	},
};
