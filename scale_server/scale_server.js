const fs  = require('fs');
const http = require('http');
const qs = require('querystring');

const scaleSelectionDocument = fs.readFileSync('scale_select.html', 'utf-8');

const majorDocument = fs.readFileSync('major.html', 'utf-8');
const minorDocument = fs.readFileSync('minor.html', 'utf-8');
const pentatonicDocument = fs.readFileSync('pentatonic.html', 'utf-8');
const unknownDocument = fs.readFileSync('unknown.html', 'utf-8');

const toneLibraryJs = fs.readFileSync('Tone-muted.js', 'utf-8');
const playerJs = fs.readFileSync('player.js', 'utf-8');
const simplePlayerJs = fs.readFileSync('SimplePlayer.js', 'utf-8');

const requestListener = function (req, res) {

  if(req.method === 'GET') {

    // Serve a resource based on the url
    // Note that this is not particularly good method for doing this
    // We'll discuss alternatives on the next round
    if(req.url === '/') {
      res.writeHead(200);
      res.end(scaleSelectionDocument);
    } else if (req.url === '/Tone-muted.js') {
      res.writeHead(200);
      res.end(toneLibraryJs);
    } else if (req.url === '/player.js') {
      res.writeHead(200);
      res.end(playerJs);
    } else if (req.url === '/SimplePlayer.js') {
      res.writeHead(200);
      res.end(simplePlayerJs);
    } else {
      res.writeHead(200);
      res.end("");
    }

  }

  if(req.method === 'POST') {

    let body = "";

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      //console.log(body);
      let postedData = qs.parse(body);
      let scaleSelected = postedData.scale_name;
      if(scaleSelected === 'major')
      {
        res.writeHead(200);
        res.end(majorDocument);
      }
      else if(scaleSelected === 'minor')
      {
        res.writeHead(200);
        res.end(minorDocument);
      }
      else if(scaleSelected === 'pentatonic')
      {
        res.writeHead(200);
        res.end(pentatonicDocument);
      }
      else
      {
        res.writeHead(200);
        res.end(unknownDocument);
      }
      

    });

  }

}

const server = http.createServer(requestListener);
server.listen(3000);