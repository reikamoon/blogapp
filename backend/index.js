require("dotenv").config();
const path = require('path')

// Initialize express
const express = require("express");
const app = express();

/// Express Ver 4+ Does Not Need BodyParser Anymore
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../frontend/build")));


// MongoDB
const { MongoClient } = require("mongodb");
const mongoPw = process.env.MONGO_PW;
const mongoUser = process.env.MONGO_USER;

const uri = `mongodb+srv://${mongoUser}:${mongoPw}@chatterbox.6ryms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(uri);
const db = client.db("blogapp");
const articlesCollection = db.collection("Articles");

// List Databases
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Show Articles and Number of Articles
async function main() {
  await client.connect(async (err, client) => {
    if (err) return console.log(err);

    console.log(`Connected to db\n`);

    // Show list of items currently in the db
    listDatabases(client);
    await articlesCollection
      .find()
      .toArray()
      .then((articles) => {
        articles.map((article) =>
          console.log(
            `Title: ${article.title} Comments: ${article.comments.length}`
          )
        );
      });
  });

  // HEALTH CHECK
  app.get("/health", (req, res) => {
    res.send({ msg: "All good!" });
  });

  // GET ARTICLE BY ID
  app.get("/details/:id", (req, res) => {
    const articleId = { id: parseInt(req.params.id) };

    articlesCollection
      .findOne(articleId)
      .then((article) => {
        res.send({ article });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          msg: "Error",
          error: err,
        });
      });
  });

  // ARTICLES LIST
  app.get("/all", (req, res) => {
    articlesCollection
      .find()
      .toArray()
      .then((articles) => {
        // console.log(articles);
        res.send({ articles });
      });
  });

  // GET ARTICLE BY ID
  app.get("/article/:id", (req, res) => {
    const articleId = { id: parseInt(req.params.id) };

    articlesCollection
      .findOne(articleId)
      .then((article) => {
        res.send({ article });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          msg: "Error",
          error: err,
        });
      });
  });

  // POST ARTICLES
  app.post("/articles/details/:id", (req, res) => {
    const articleId = { id: parseInt(req.params.id) };

    const pushArticle = {
      $push: {
        articles: {
          createdAt: new Date(),
          title: req.body.title,
          author: req.body.author,
          img: req.body.img,
          desc: req.body.desc,
          body: req.body.body,
        },
      },
    };

    articlesCollection
      .findOneAndUpdate(articleId, pushArticle)
      .then(() => {
        console.log(`Article added to MongoDB id: ${articleId.id}`);
        res.send({
          status: "success",
          msg: "Comment added successfully",
          title: req.body.title,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: "err",
          error: err,
        });
      });
  });

  // POST COMMENTS
  app.post("/articles/details/:id/comment", (req, res) => {
    const articleId = { id: parseInt(req.params.id) };

    const pushComment = {
      $push: {
        comments: {
          createdAt: new Date(),
          name: req.body.name,
          comment: req.body.comment,
        },
      },
    };

    articlesCollection
      .findOneAndUpdate(articleId, pushComment)
      .then(() => {
        console.log(`Comment added to MongoDB id: ${articleId.id}`);
        res.send({
          status: "success",
          msg: "Comment added successfully",
          comment: req.body.comment,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: "err",
          error: err,
        });
      });
  });
}


// Choose a port to listen on
const port = process.env.PORT || 3200;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
