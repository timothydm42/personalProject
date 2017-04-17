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
