import { Router } from 'express';
import sectorController from '../controllers/sectorController.js';
var router = Router();


// GET all sectors
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await sectorController.getAll(req, res, next);
        // #swagger.tags = ['Sectors'];
        // #swagger.description = 'GET all sectors'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// GET one sector
router.get('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await sectorController.getOne(req, res, next);
        // #swagger.tags = ['Sectors'];
        // #swagger.description = 'GET one sector.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// POST create sector
router.post('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await sectorController.create(req, res, next);
        // #swagger.tags = ['Sectors'];
        // #swagger.description = 'POST create sector.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// PUT update sector
router.put('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await sectorController.update(req, res, next);
        // #swagger.tags = ['Sectors'];
        // #swagger.description = 'PUT update sector.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// DELETE delete sector
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await sectorController.delete(req, res, next);
        // #swagger.tags = ['Sectors'];
        // #swagger.description = 'DELETE delete sectors.'
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
