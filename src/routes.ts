import { Router } from 'express';
import { HealthCheck } from './controllers/health.controller';
import { e } from './utils/trycatch';

const router = Router();
router.get('/', e(HealthCheck));

export default router;
