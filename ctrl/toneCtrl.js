
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
          resolve(tone, null, 2);
        }
      });
    })
  },

  decide: (req,res,next) => {
    module.exports.getScore(req,res,next).then(result=>{
      //console.log(result);
      let workResult = result;
      //console.log(workResult)
      let violationTest = workResult.document_tone.tone_categories[0].tones.find((e,i)=> i != 2 && i != 4 && Number(e.score) > 0.35);
      if (violationTest) {
        let correctionsArr = [];
        let badSentences = workResult.sentences_tone.filter((e,i,a)=>{
          return e.tone_categories[0].tones.find((el,ind,arr)=>ind != 2 && ind != 4 && Number(el.score) > 0.35)
        })
        badSentences.forEach((e)=>{
          correctionsArr.push({sentence:e.text,emotion:e.tone_categories[0].tones.find((el,ind,arr)=>ind != 2 && ind != 4 && Number(el.score) > 0.35).tone_id})
        })

        console.log(correctionsArr);
        res.send(correctionsArr);
      }
      else {
        console.log("your submission has been posted to the homepage");
        res.send("your submission has been posted to the homepage");
      }
    })
  },

};
