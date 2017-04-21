const sessSecret = require("../.config.js");

const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': sessSecret.usernameNat,
  'password': sessSecret.passwordNat,
  'version_date': '2017-02-27'
});



var parameters = {
  'url': 'http://www.epi.org/publication/ib364-corporate-tax-rates-and-economic-growth/',
  'features': {
    'concepts': {
      'limit': 1
    },
    'metadata': {}
  }
}

exports.analyzeLink = () =>{
  return linkPromise = new Promise ((resolve,reject)=>{
    natural_language_understanding.analyze(parameters, function(err, response) {
      if (err)
        console.log('error:', err);
      else
        console.log(JSON.stringify(response, null, 2));
        resolve(response, null, 2);
    });
  });
};
