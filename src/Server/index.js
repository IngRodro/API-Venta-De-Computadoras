import express from 'express';
import cors from 'cors';
import { initializeDB } from './db';

const corsOptions = {
  origin: 'https://web-venta-de-computadoras.vercel.app',
  allowedHeaders: 'Content-Type, auth-token',
  exposedHeaders: 'auth-token',
  optionsSuccessStatus: 200,
};

export const app = express();

// creating Server
export const initializeServer = async (routes) => {
  // initialize DB
  await initializeDB();

  app.use(cors(corsOptions));

  // json parse
  app.use(express.json());

  // set urls
  app.use(routes);
};
