import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use('/api/contacts', contactsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info('Express listening on port: ' + port);
});
