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

exports.getParentResp = (req,res,next) => {
  let parentId = Number(req.params.id);
  db.allresponses.find({parent: parentId},(err,responses)=>{
    console.log(JSON.stringify(responses,null,2) + "  here");
    res.send(responses);
  });
};

exports.postToDB = (req,res,next) => {

  let dbTable = "allposts";

  let tableInsertion = {thesis:req.body.thesis,link:req.body.source,body:req.body.explanation};

  if(req.body.id) {
    dbTable = "allresponses";
    tableInsertion.id = req.body.id;
  }

  db.dbTable.insert(tableInsertion,(err)=>{
    if(err){
      console.log(err);
      let errMessage = exports.parseErrorMessage(err)
      res.status(500).send(errMessage);
    }
    else res.send("Your submission will be posted momentarily");
  });
};

exports.parseErrorMessage = (errObj) => {
  if (/thesis/.test(errObj.detail)) return "Your post is denied because that thesis has already been asserted"
  else return "Please fill out all text boxes with correct data"
};
