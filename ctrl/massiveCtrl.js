const sessSecret = require("../.config.js");

const massive = require("massive");

const db =  massive.connectSync({
  connectionString : "postgres://"+sessSecret.dbUsername+":"+sessSecret.dbPassword+"@"+sessSecret.dbEndpoint,
})

exports.getAllPosts = (req,res,next) => {
  db.run("select * from allposts",(err,posts) => {
    res.send(posts);
  })
};
