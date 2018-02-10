//load http module to create http server
import http from 'http';
import dotenv from 'dotenv';
import greeting from './greeting.js';

dotenv.config();

const port = process.env.PORT;
//Configure http server to respond with 'Hello World' to all reqs
const server = http.createServer((req, res) => {

  let lang = req.headers['accept-language'];
  const defaultLang = 'en';
  if(!greeting[lang]) lang=defaultLang;
  const response={
    lang: lang,
    message: greeting[lang]
  };

  res.writeHead(200, {'Content-Type': 'text/plain',
                      'Content-Language': response.lang});
  res.end(response.message);
});

server.listen(port);

//print out message when server starts
console.log('Server running at '+port);
