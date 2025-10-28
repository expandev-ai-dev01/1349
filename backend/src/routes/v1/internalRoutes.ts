import { Router } from 'express';
import * as questaoController from '@/api/v1/internal/questao/controller';

const router = Router();

/**
 * @summary
 * Internal (authenticated) API routes configuration
 *
 * @module routes/v1/internalRoutes
 */

/**
 * @summary
 * Question management routes
 */
router.get('/questao', questaoController.listHandler);
router.post('/questao', questaoController.createHandler);
router.get('/questao/:id', questaoController.getHandler);
router.put('/questao/:id', questaoController.updateHandler);
router.delete('/questao/:id', questaoController.deleteHandler);

export default router;
