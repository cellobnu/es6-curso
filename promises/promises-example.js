const fetch = require("node-fetch");
var posts = fetch("https://willianjusten.com.br/search.json");
// pending
// resolved
// rejected
posts
  .then(data => data.json())
  .then(data =>
    data.map(post => {
      console.log(post.title);
    })
  );
