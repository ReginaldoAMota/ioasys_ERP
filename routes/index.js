import { Router } from 'express';

import app from '../app.js';

import usersRouter from './users.js';
import authRouter from './auth.js';
import authBusinessRouter from './userBusiness.js';
import roleRouter from './role.js';
import sectorRouter from './sector.js';
import statusRouter from './status.js';

import accessRouter from './access.js';
import callRouter from './call.js';
import callNoteRouter from './callNote.js';
import callStatusRouter from './callStatus.js';
import companyRouter from './company.js';

var router = Router();


router.use('/auth', (req, res, next) => authRouter(req, res, next));
router.use('/user', usersRouter);
router.use('/userBusiness', authBusinessRouter);
router.use('/role', roleRouter);
router.use('/sector', sectorRouter);
router.use('/status', statusRouter);
router.use('/access', accessRouter);
router.use('/call', callRouter);
router.use('/callNote', callNoteRouter);
router.use('/callStatus', callStatusRouter);
router.use('/company', companyRouter);


export default router;