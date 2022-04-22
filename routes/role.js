import { Router } from 'express';
import roleController from '../controllers/roleController.js';
var router = Router();



// GET all roles
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await roleController.getAll(req, res, next);
        // #swagger.tags = ['Roles'];
        // #swagger.description = 'GET all roles.'
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
router.get('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await roleController.getOne(req, res, next);
        // #swagger.tags = ['Roles'];
        // #swagger.description = 'GET one role.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// POST create role
router.post('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await roleController.create(req, res, next);
        // #swagger.tags = ['Roles'];
        // #swagger.description = ' POST create role.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// PUT update role
router.put('/:id',

    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    }, async (req, res, next) => {
        await roleController.update(req, res, next);
        // #swagger.tags = ['Roles'];
        // #swagger.description = 'PUT update role.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// DELETE delete role
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await roleController.delete(req, res, next);
        // #swagger.tags = ['Roles'];
        // #swagger.description = 'DELETE delete role.'
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
