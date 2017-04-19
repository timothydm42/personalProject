
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
      toneAnalyzer.tone({text:req.body.thesis + " " + req.body.explanation},(err, tone) => {
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

  decide: (req,res,next) => {
    module.exports.getScore(req,res,next).then(result=>{
      //console.log(result);
      let workResult = JSON.parse(result);
      console.log(workResult)
      let responseStr = "your submission has been posted to the homepage";
      let violationsArr = workResult.document_tone.tone_categories[0].tones.filter((e,i)=> i != 2 && i != 4 && Number(e.score) > 0.35);
      if (violationsArr) {
        let badSentences = workResult.sentences_tone.filter((e,i,a)=>{
          return e.tone_categories[0].tones.find((el,ind,arr)=>ind != 2 && ind != 4 && Number(el.score) > 0.35)
        })
        console.log(badSentences);
        res.send(badSentences);
      }
      else {
        console.log(responseStr);
        res.send(responseStr);
      }
    })
  },

};
