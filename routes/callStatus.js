import { Router } from 'express';
import callStatusController from '../controllers/callStatusController.js';
import AccessMiddleware from '../middlewares/AuthenticationAsurrence.js';
var router = Router();



// GET all call status
router.get('/',

    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callStatusController.getAll(req, res, next);
        // #swagger.tags = ['Call status'];
        // #swagger.description = 'GET all call status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// GET one call status
router.get('/:id',

    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callStatusController.getOne(req, res, next);
        // #swagger.tags = ['Call status'];
        // #swagger.description = 'GET one call status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// POST create call status
router.post('/',

    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callStatusController.create(req, res, next);
        // #swagger.tags = ['Call status'];
        // #swagger.description = ' POST create call status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// PUT update call status
router.put('/:id',

    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callStatusController.update(req, res, next);
        // #swagger.tags = ['Call status'];
        // #swagger.description = 'PUT update call status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// DELETE delete call status
router.delete('/:id',

    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callStatusController.delete(req, res, next);
        // #swagger.tags = ['Call status'];
        // #swagger.description = 'DELETE delete call status.'
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
