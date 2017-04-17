const sessSecret = require("../.config.js");

const massive = require("massive");

const db =  massive.connectSync({
  connectionString : "postgres://"+sessSecret.dbUsername+":"+sessSecret.dbPassword+"@"+sessSecret.dbEndpoint,
})

exports.getTheses = (req,res,next) => {
  db.run("select thesis from allposts",(err,theses) => {
    res.send(theses);
  })
};
