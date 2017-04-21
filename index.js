
const sessSecret = require("./.config.js"),
      toneCtrl = require("./ctrl/toneCtrl.js"),
      natCtrl = require("./ctrl/natCtrl.js"),
      massiveCtrl = require("./ctrl/massiveCtrl.js");

const express = require("express"),
      session = require("express-session"),
      cors = require("cors"),
      bodyParser = require("body-parser");


const app = express();

const corsOptions = {
  origin:"http://localhost:3000",
};


app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
  secret: sessSecret.secret,
  resave: true,
  saveUninitialized: true
}))

app.post("/submit",toneCtrl.referenceToneAnalyzer); //remember to Not invoke the callbacks...

app.post("/database",massiveCtrl.postToDB);

app.get("/theses",massiveCtrl.getThesesWId);

app.get("/post/:id",massiveCtrl.getPost);

app.get("/link",natCtrl.analyzeLink);

app.listen(3000,()=>console.log("3000 baby"));
