// Authenticate via API Key
var tumblr = require("tumblr.js");
var client = tumblr.createClient({
  consumer_key: ""
});
let user = "picsthatmakeyougohmm.tumblr.com";
// Make the request
client.blogPosts(user, function(err, data) {
  // ...
  let photo = Object.entries(data.posts.blog);
  console.log(photo);
});
