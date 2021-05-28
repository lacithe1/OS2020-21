import {Router} from 'express';
import { StateController } from './src/controller/state.controller';
import { CarController } from './src/controller/car.controller';
import { UserController } from './src/controller/user.controller';
export function getRouter(){
    const router = Router();
    const userController = new UserController();
    const carController = new CarController();
    const stateController = new StateController();
    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);
    router.get('/cars', carController.getAll);
    router.get('/cars/:id', carController.getOne);
    router.post('/cars', carController.create);
    router.put('/cars', carController.update);
    router.delete('/cars/:id', carController.delete);
    router.get('/states', stateController.getAll);
    router.get('/states/:id', stateController.getOne);
    router.post('/states', stateController.create);
    router.put('/states', stateController.update);
    router.delete('/states/:id', stateController.delete);
    return router;
}