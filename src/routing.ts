import * as UserController from './controllers/UserController'
import { Router }          from "express";

const controller = (method) => (request, response, next) => {
  method(request, response, next).catch(error => next(error))
}

export default (router: Router) => {

  // TODO will add more route here
  router.get('/user/:id', controller(UserController.detail))
  router.put('/user/:id', controller(UserController.update))
  router.delete('/user/:id', controller(UserController.remove))
  router.get('/user', controller(UserController.search))
  router.post('/user', controller(UserController.create))
}

