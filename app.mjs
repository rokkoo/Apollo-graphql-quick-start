import express from 'express';
import grapqlServer from './src/schemasGraphql/index.mjs';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

grapqlServer
  .listen()
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
