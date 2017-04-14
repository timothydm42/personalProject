
const sessSecret = require("../.config.js");

const toneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new toneAnalyzerV3({
  username: sessSecret.username,
  password: sessSecret.password,
  version: 'v3',
  version_date: '2016-05-19'
});



module.exports = {

  getScore: (req,res,next) => {
    return tonePromise = new Promise ((resolve,reject)=>{
      toneAnalyzer.tone({text:req.body.text},(err, tone) => {
        if (err) {
          console.log(err);
          next();
        }
        else {
          console.log("yep");
          resolve(JSON.stringify(tone, null, 2));
        }
      });
    })
  },

  respond: (req,res,next) => {
    module.exports.getScore(req,res,next).then(result=>{
      console.log(result);
      res.send(result);
    })
  },

};
