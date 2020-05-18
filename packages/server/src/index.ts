import express from 'express';

const app = express();

app.listen(3333, () => {
  // tslint:disable-next-line: no-console
  console.log('Server running on port 3333')
})