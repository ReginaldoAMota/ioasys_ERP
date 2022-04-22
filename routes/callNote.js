import { Router } from 'express';
import callNoteController from '../controllers/callNoteController.js';
import AccessMiddleware from '../middlewares/AuthenticationAsurrence.js';
var router = Router();



// GET all call notes
router.get('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callNoteController.getAll(req, res, next);
        // #swagger.tags = ['Call Notes'];
        // #swagger.description = 'GET all call notes.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

    });

// GET one call note
router.get('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callNoteController.getOne(req, res, next);
        // #swagger.tags = ['Call Notes'];
        // #swagger.description = 'GET one call note.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// POST create call note
router.post('/',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callNoteController.create(req, res, next);
        // #swagger.tags = ['Call Notes'];
        // #swagger.description = ' POST create call note.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// PUT update call note
router.put('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callNoteController.update(req, res, next);
        // #swagger.tags = ['Call Notes'];
        // #swagger.description = 'PUT update call note.'
        /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */


    });

// DELETE delete call note
router.delete('/:id',
    (req, res, next) => {
        AccessMiddleware([2], { req, res, next })
    },
    async (req, res, next) => {
        await callNoteController.delete(req, res, next);
        // #swagger.tags = ['Call Notes'];
        // #swagger.description = 'DELETE delete call note.'
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
