const fs  = require('fs');
const http = require('http');
const qs = require('querystring');

const formDocument = fs.readFileSync('form.html', 'utf-8');

// Replace this melodyReverser with your working implementation
function melodyReverser(melody) 
{ 
const splittedStr = melody.split(' ');
//console.log(splittedStr);
const reversedStr = splittedStr.reverse();
return reversedStr.join(' ');
 }


const requestListener = function (req, res) {

  if(req.method === 'GET') {
    res.writeHead(200);
    res.end(formDocument);
  }

  if(req.method === 'POST') {

    let body = "";

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      let postedData = qs.parse(body);
      let melodyInput = postedData.melody;
      let reversed = melodyReverser(melodyInput);
      res.writeHead(200);
      res.end(melodyInput + " " +'reversed is' + " " +reversed);
    });

  }

}

const server = http.createServer(requestListener);
server.listen(3000);