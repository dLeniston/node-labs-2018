//load http module to create http server
import dotenv from 'dotenv';
import express from 'express';
import greeting from './greeting';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

//add route for greeting
app.get('/greeting', (req, res)=>{
  let lang = req.headers['accept-language'];
  const defaultLang = 'en';
  if(!greeting[lang]) lang = defaultLang;
  const response = {
    lang: lang,
    message: greeting[lang]
  };
});

app.listen(port, () => {
  console.info('Server running at '+port);
});
