import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

/**
 * @summary
 * Main API router with version management
 *
 * @module routes
 */

/**
 * @summary
 * Version 1 routes (current stable)
 */
router.use('/v1', v1Routes);

/**
 * @summary
 * Future versions can be added here
 * Example: router.use('/v2', v2Routes);
 */

export default router;
