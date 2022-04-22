import express, { json, Router, urlencoded } from 'express';
import 'dotenv/config'

import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createServer } from 'http';

import listEndpoints from 'express-list-endpoints'


import pkg from 'swagger-ui-express';
const { setup, serve } = pkg;
import swaggerDocument from './swagger.json';

import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import authBusinessRouter from './routes/userBusiness.js';
import roleRouter from './routes/role.js';
import sectorRouter from './routes/sector.js';
import statusRouter from './routes/status.js';

import accessRouter from './routes/access.js';
import callRouter from './routes/call.js';
import callNoteRouter from './routes/callNote.js';
import callStatusRouter from './routes/callStatus.js';
import companyRouter from './routes/company.js';



var app = express();

var server = createServer(app);

server.listen(process.env.PORT || 3030);


app.use(
    '/api-docs',
    serve,
    setup(swaggerDocument)
);
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());







app.use('/auth', authRouter);
app.use('/user', usersRouter);
app.use('/userBusiness', authBusinessRouter);
app.use('/role', roleRouter);
app.use('/sector', sectorRouter);
app.use('/status', statusRouter);
app.use('/access', accessRouter);
app.use('/call', callRouter);
app.use('/callNote', callNoteRouter);
app.use('/callStatus', callStatusRouter);
app.use('/company', companyRouter);




export default app;
