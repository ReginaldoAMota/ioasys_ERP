import { Router } from 'express';
import companyController from '../controllers/companyController.js';
import AccessMiddleware from '../middlewares/AuthenticationAsurrence.js';
var router = Router();



// GET all Companies
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await companyController.getAll(req, res, next);
        // #swagger.tags = ['Companies'];
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

// GET one Company
router.get('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await companyController.getOne(req, res, next);
        // #swagger.tags = ['Companies'];
        // #swagger.description = 'GET one Company.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// POST create Company
router.post('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await companyController.create(req, res, next);
        // #swagger.tags = ['Companies'];
        // #swagger.description = ' POST create Company.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// PUT update Company
router.put('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await companyController.update(req, res, next);
        // #swagger.tags = ['Companies'];
        // #swagger.description = 'PUT update Company.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// DELETE delete Company
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await companyController.delete(req, res, next);
        // #swagger.tags = ['Companies'];
        // #swagger.description = 'DELETE delete Company.'
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
