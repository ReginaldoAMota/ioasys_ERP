import { Router } from 'express';
import statusController from '../controllers/statusController.js';
var router = Router();

// GET all status
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await statusController.getAll(req, res, next);
        // #swagger.tags = ['Status'];
        // #swagger.description = 'GET all status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// GET one status
router.get('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await statusController.getOne(req, res, next);
        // #swagger.tags = ['Status'];
        // #swagger.description = 'GET one status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// POST create status
router.post('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await statusController.create(req, res, next);
        // #swagger.tags = ['Status'];
        // #swagger.description = 'POST create status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    }
);

// PUT update status
router.put('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await statusController.update(req, res, next);
        // #swagger.tags = ['Status'];
        // #swagger.description = 'PUT update status.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// DELETE delete status
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await statusController.delete(req, res, next);
        // #swagger.tags = ['Status'];
        // #swagger.description = 'DELETE delete status'
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
