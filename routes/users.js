import { Router } from 'express';
import userController from '../controllers/userController.js';
import AccessMiddleware from '../middlewares/AuthenticationAsurrence.js';
var router = Router();



// GET all users
router.get('/',
  (req, res, next) => {
    AccessMiddleware([2], { req, res, next })
  },
  async (req, res, next) => {
    await userController.getAll(req, res, next);
    // #swagger.tags = ['Users'];
    // #swagger.description = 'GET all users.'
    /*  #swagger.parameters['Authorization'] = {
        in: 'header',
        description: 'Authorization token',
        schema: {
            type: 'string'
        }
}
*/

  });

// GET one user
router.get('/:id',
  (req, res, next) => {
    AccessMiddleware([1], { req, res, next })
  },
  async (req, res, next) => {
    await userController.getOne(req, res, next);
    // #swagger.tags = ['Users'];
    // #swagger.description = 'GET one user.'
    /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

  });

// POST create user
router.post('/',
  (req, res, next) => {
    AccessMiddleware([1], { req, res, next })
  },
  async (req, res, next) => {
    await userController.create(req, res, next);
    // #swagger.tags = ['Users'];
    // #swagger.description = 'POST create user.'
    /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

  });

// PUT update user
router.put('/:id',
  (req, res, next) => {
    AccessMiddleware([1], { req, res, next })
  },
  async (req, res, next) => {
    await userController.update(req, res, next);
    // #swagger.tags = ['Users'];
    // #swagger.description = 'PUT update user.'
    /*  #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Authorization token',
            schema: {
                type: 'string'
            }
    }
 */

  });

// DELETE delete user
router.delete('/:id',
  (req, res, next) => {
    AccessMiddleware([1], { req, res, next })
  },
  async (req, res, next) => {
    await userController.delete(req, res, next);
    // #swagger.tags = ['Users'];
    // #swagger.description = 'DELETE delete user.'
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
