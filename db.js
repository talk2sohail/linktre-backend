const sdk = require("node-appwrite");

const client = new sdk.Client();

const { DB_URL, PROJECT_ID, API_KEY, DATABASE_ID, JOB_COLLECTION_ID } =
	process.env;

client.setEndpoint(DB_URL).setProject(PROJECT_ID).setKey(API_KEY);

const databases = new sdk.Databases(client);

const jobs_collection = databases.listDocuments(DATABASE_ID, JOB_COLLECTION_ID);

module.exports = {
	jobs_collection,
};
