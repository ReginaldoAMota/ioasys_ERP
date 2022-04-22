import { Router } from 'express';
import userBusinessController from '../controllers/userBusinessController.js';
var router = Router();



//GET all usersBusiness
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await userBusinessController.getAll(req, res, next);
        // #swagger.tags = ['Users Business'];
        // #swagger.description = 'GET all usersBusiness.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

//GET one userBusiness
router.get('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await userBusinessController.getOne(req, res, next);
        // #swagger.tags = ['Users Business'];
        // #swagger.description = 'GET one userBusiness.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

//POST create userBusiness
router.post('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await userBusinessController.create(req, res, next);
        // #swagger.tags = ['Users Business'];
        // #swagger.description = 'POST create userBusiness.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

//PUT update userBusiness
router.put('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await userBusinessController.update(req, res, next);
        // #swagger.tags = ['Users Business'];
        // #swagger.description = 'PUT update userBusiness.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

//DELETE delete userBusiness
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await userBusinessController.delete(req, res, next);
        // #swagger.tags = ['Users Business'];
        // #swagger.description = 'DELETE delete userBusinesss.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

export default router;
