const express = require('express');
const validate = require('../../middlewares/validate');
const demoValidation = require('../../validations/demo.validation');
const demoController = require('../../controllers/demo.controller');

const router = express.Router();

router.route('/').get(validate(demoValidation.getDemo), demoController.getDemo);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Demo
 *   description: Demo route
 */

/**
 * @swagger
 * /demo:
 *   get:
 *     summary: Create a demo
 *     description: Demo route description
 *     tags: [Demo]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Demo name
 *     responses:
 *       "200":
 *         description: Response
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
