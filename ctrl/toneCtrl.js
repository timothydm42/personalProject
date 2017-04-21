
const sessSecret = require("../.config.js");

const toneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new toneAnalyzerV3({
  username: sessSecret.usernameTone,
  password: sessSecret.passwordTone,
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
          console.log(JSON.stringify(tone, null, 2));
          resolve(tone, null, 2);
        }
      });
    });
  },

  determineViolations: (toneObj) => {
    let workResult = toneObj;

    let correctionsArr = [];
    let badSentences = workResult.sentences_tone.filter((e,i,a)=>{
      return e.tone_categories[0].tones.find((el,ind,arr)=>ind != 2 && ind != 4 && Number(el.score) > 0.35)
    })
    badSentences.forEach((e,i,a)=>{
      if(i === a.findIndex(f=>f.text === e.text)) {
        correctionsArr.push({sentence:e.text,emotion:e.tone_categories[0].tones.find((el,ind,arr)=>ind != 2 && ind != 4 && Number(el.score) > 0.35).tone_id})
      }
    })
    if(correctionsArr.length) {
      console.log(correctionsArr);
      return correctionsArr;
    }
    else {
      console.log("checking submission against our database");
      return "checking your submission against our database";
    }
  },

  referenceToneAnalyzer: (req,res,next) => {
    module.exports.getScore(req,res,next).then(result=>{
      res.send(module.exports.determineViolations(result));
    });
  },

};
