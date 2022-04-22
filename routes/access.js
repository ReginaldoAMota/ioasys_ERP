import { Router } from 'express';
import accessController from '../controllers/accessController.js';
import AccessMiddleware from '../middlewares/AuthenticationAsurrence.js';
var router = Router();



// GET all access
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await accessController.getAll(req, res, next);
        // #swagger.tags = ['Accesses'];
        // #swagger.description = 'GET all Accesses.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// GET one role
router.get('/:id', (req, res, next) => {
    AccessMiddleware([2], { req, res, next })
},
    async (req, res, next) => {
        await accessController.getOne(req, res, next);
        // #swagger.tags = ['Accesses'];
        // #swagger.description = 'GET one access.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// POST create access
router.post('/', (req, res, next) => {
    AccessMiddleware([2], { req, res, next })
},
    async (req, res, next) => {
        await accessController.create(req, res, next);
        // #swagger.tags = ['Accesses'];
        // #swagger.description = ' POST create access.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// PUT update access
router.put('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await accessController.update(req, res, next);
        // #swagger.tags = ['Accesses'];
        // #swagger.description = 'PUT update access.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// DELETE delete access
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await accessController.delete(req, res, next);
        // #swagger.tags = ['Accesses'];
        // #swagger.description = 'DELETE delete access.'
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
