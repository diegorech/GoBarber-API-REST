import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

// Pra baixo dessa linha necessita token
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/sessions', SessionController.store);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);

// .single - pois será 1 arquivo por vez - ('nome do campo na req')
routes.post('/files', upload.single('file'), FileController.store);
export default routes;
