require("dotenv").config();
// Initialize express
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");
const mongopw = process.env.MONGO_PW;

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = `mongodb+srv://Anjelica:${mongopw}@chatterbox.6ryms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"`;

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// Placeholder
app.get("/", (req, res) => {
  res.send("Homepage");
});

// Choose a port to listen on
const port = process.env.PORT || 3100;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log("App listening on port 3100!");
});
