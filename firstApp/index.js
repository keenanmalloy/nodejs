const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a new request");
//   //   res.send("hello, we got your request. this is a response");
//   res.send("<h1>this is my webpage</h1>");
// });

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.post("/cats", (req, res) => {
  res.send("post request to /cats");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

// app.get("/r/:subreddit/comments/:postId", (req, res) => {
//   const { subreddit, postId } = req.params;
//   res.send(
//     `<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit </h1>`
//   );
// });

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("nothing found if nothing searched");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// app.get("*", (req, res) => {
//   res.send("i dont know");
// });
//  /cats => 'meow'
//  /dogs => 'woof'
//  '/'

app.listen(3000, () => {
  console.log("listening on port 3000");
});
