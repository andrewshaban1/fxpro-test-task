import { Router } from 'express';
import { Hello } from './controllers/hello.controller';
import { e } from './utils/trycatch';

const router = Router();

router.get('/hello', e(Hello));

export default router;
