# English To Pirate Translator

## Overview

This platform provides a way for land dwellers, like your self, to translate your text into the pirate language! The platform will receave a string, and translate/replace words as required.

The pirate dictonary has located in the dictonary.json file. This file will be read at server startup and will be used to perform the translations. NOTE: Updating the dictonary will the server is running will not take affect because the dictionary is loaded into memory when the server is booted.

## How to Use!

The server responds to GET requests where the text to be translated is provided as a query perameters. See below some examples of using the tool with curl commands.

#### Display the README

curl localhost:3000/

#### Translate Hello to Pirate.
curl localhost:3000/translate?input=hello

ahoy

#### Translate a sentance to pirate
curl localhost:3000/translate?input=hello+friend+lets+attack+a+ship+after+we+drink+this+rum

ahoy matey lets raid a vessel after we drink this grog

