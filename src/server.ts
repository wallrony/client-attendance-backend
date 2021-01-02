import express from 'express';
import cors from 'cors';
import CoreRouter from './routers/core';
import AccountsRouter from './routers/accounts';

const server = express();

server.use(express.json());
server.use(cors());

// Set routers and middlewares
const accountsRouter = AccountsRouter.setHandlers();
const coreRouter = CoreRouter.setHandlers();

server.use('/api/core', coreRouter)
server.use('/api/accounts', accountsRouter)

export default server;