const sessSecret = require("../.config.js");

const massive = require("massive");

const db =  massive.connectSync({
  connectionString : "postgres://"+sessSecret.dbUsername+":"+sessSecret.dbPassword+"@"+sessSecret.dbEndpoint,
})

exports.getThesesWId = (req,res,next) => {
  db.run("select id,thesis from allposts",(err,theses) => {
    res.send(theses);
  })
};

exports.getPost = (req,res,next) => {
  let id = Number(req.params.id);
  db.allposts.findOne(id,(err,post) => {
    res.send(post);
  })
};
