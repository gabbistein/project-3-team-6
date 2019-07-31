// Authenticate via API Key
var tumblr = require("tumblr.js");
var client = tumblr.createClient({
  consumer_key: "svEF96HgjjM2N4CizV6cI9phVPpWRzKwl2ZNDpev5LwNomZZs0"
});
let user = "picsthatmakeyougohmm.tumblr.com";
// Make the request
client.blogPosts(user, function(err, data) {
  // ...
  let photo = Object.entries(data.posts.blog);
  console.log(photo);
});
