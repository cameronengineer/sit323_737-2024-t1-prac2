/*******************************************************************
* Course            : SIT737 - Cloud Native Application Development
* Assesment         : 2.1P: Node.js and Express
* Student Name      : Cameron Mitchell
* Student ID        : s224040733
/******************************************************************/

// Import packages
const fs = require('node:fs');

// Create the web server/app object
var express = require("express")
var app = express()
var port = process.env.port || 3000;

// Capture README file into memory
const readme = fs.readFileSync('./README.md', 'utf8');
//console.log(readme);

// Read the dictonary from dictionary.json into memory
const dictionary = fs.readFileSync('./dictionary.json', 'utf8');
const dictionaryDict = JSON.parse(dictionary);
// console.log(dictionary);

// Create function which swaps words in a provided script based
// on values from the dictonary.json
function translate(englishInput) {

    // Split input up by spaces
    var englishInputList = englishInput.split(' ')

    // If a word is in the dict, then swap the value in the list
    // to the value in the dict 
    for (let i = 0; i < englishInputList.length; i++) {
        if (englishInputList[i] in dictionaryDict) {
            englishInputList[i] = dictionaryDict[englishInputList[i]]
        }
      } 

    return englishInputList.join(" ")
}

// Create a static homepage which serves the content from the README
app.get("/", (req,res)=>{
    res.send(readme)
});

// Create the server listener to receave the requests and pass them to
// to the conversion function
app.get("/translate", (req,res)=>{
    res.send(translate(req.query.input)); 
});


// Start listening for responses
app.listen(port,()=>{
  console.log("App listening to: "+port)
  console.log("The English To Pirate Translator Has Started!")
})