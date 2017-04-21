const sessSecret = require("../.config.js");

const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': sessSecret.usernameNat,
  'password': sessSecret.passwordNat,
  'version_date': '2017-02-27'
});

exports.analyzeLink = (req,res,next) =>{
  var parameters = {
    'url': req.body.url,
    'features': {
      'concepts': {
        'limit': 3
      },
      'metadata': {}
    }
  };

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

exports.describeLink = (linkObj) => {
  return {
            title:linkObj.metadata.title,
            pubDate:new Date(linkObj.metadata.publication_date).toLocaleDateString(),
            authors:linkObj.metadata.authors,
            supplements:[
                          {
                            title:linkObj.concepts[0].text,
                            link:linkObj.concepts[0].dbpedia_resource
                          },
                          {
                            title:linkObj.concepts[1].text,
                            link:linkObj.concepts[1].dbpedia_resource
                          },
                          {
                            title:linkObj.concepts[2].text,
                            link:linkObj.concepts[2].dbpedia_resource
                          }
                        ]
         };
};

exports.getLinkContext = (req,res,next) => {
  exports.analyzeLink(req,res,next).then(result=>{
    res.send(exports.describeLink(result));
  })
};
