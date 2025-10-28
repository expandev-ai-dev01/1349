import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

/**
 * @summary
 * V1 API router configuration
 *
 * @module routes/v1
 */

/**
 * @summary
 * External (public) routes - /api/v1/external/...
 */
router.use('/external', externalRoutes);

/**
 * @summary
 * Internal (authenticated) routes - /api/v1/internal/...
 */
router.use('/internal', internalRoutes);

export default router;
