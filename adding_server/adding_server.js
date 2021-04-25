const fs  = require('fs');
const http = require('http');
var qs = require('querystring');

const formDocument = fs.readFileSync('form.html', 'utf-8');


const requestListener = function (req, res) {
  if(req.method === 'GET')
  {
    res.writeHead(200);
    res.end(formDocument);
  }
  if(req.method === 'POST')
  {
    let body = "" ;
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end',function(){
      let postedData = qs.parse(body);
      //console.log(postedData);
      let numberAsString1 = postedData.number_1;
      //console.log(numberAsString1);
      let num1 = parseInt(numberAsString1);
      //console.log(num1);
      let numberAsString2 = postedData.number_2;
      let num2 = parseInt(numberAsString2);
      let addedValue = num1 + num2;
      //console.log(addedValue);
      res.writeHead(200);
      res.end('That adds up to:' + " " + addedValue);
    });
  }
}

//console.log('inside');
const server = http.createServer(requestListener);
server.listen(3000);
