const sessSecret = require("../.config.js");

const massive = require("massive");

const db =  massive.connectSync({
  connectionString : "postgres://"+sessSecret.dbUsername+":"+sessSecret.dbPassword+"@"+sessSecret.dbEndpoint,
});

exports.getThesesWId = (req,res,next) => {
  db.run("select id,thesis from allposts",(err,theses) => {
    res.send(theses);
  });
};

exports.getPost = (req,res,next) => {
  let id = Number(req.params.id);
  db.allposts.findOne(id,(err,post) => {
    res.send(post);
  });
};

exports.postToDB = (req,res,next) => {
  db.allposts.insert({thesis:req.body.thesis,link:req.body.source,body:req.body.explanation},(err)=>{
    if(err){
      console.log(err);
      res.status(500).send(err);
    }
    else res.send("Your submission will be posted to the homepage momentarily");
  });
};
