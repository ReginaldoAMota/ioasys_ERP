import { Router } from 'express';
import authController from '../controllers/authController.js';
import AuthenticationAsurrence from '../middlewares/AuthenticationAsurrence.js';
var router = Router();


router.post('/signin',
    async (req, res, next) => {
        await authController.login(req, res, next)
        // #swagger.tags = ['Authentication'];
        // #swagger.description = 'Endpoint for login.'
        /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'user data',
        }
        */


    }

);

export default router;
