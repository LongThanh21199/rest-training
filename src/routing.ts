import * as UserController from './controllers/UserController'
import {Router} from "express";
import {body} from "express-validator";
import validate from "./middlewares/validate";

const controller = (method) => (request, response, next) => {
    method(request, response, next).catch(error => next(error))
}

export default (router: Router) => {

    // TODO will add more route here
    router.get('/user/:id', controller(UserController.detail))

    router.put('/user/:id',
        validate(
            body('firstName').isString().isLength({min: 3, max: 25}),
            body('lastName').isString().isLength({min: 3, max: 25})
        ),
        controller(UserController.update)
    )

    router.delete('/user/:id', controller(UserController.remove))

    router.get('/user', controller(UserController.search))

    router.post('/user',
        validate(
            body('firstName').isString().isLength({min: 3, max: 25}),
            body('lastName').isString().isLength({min: 3, max: 25}),
            body('email').isEmail().matches(/\d/),
            body('password').isInt({gt: 50, lt: 100}).withMessage('>50 && <100')
        ),

        controller(UserController.create)
    )

    router.post('/restore/user/:id',UserController.restore)

}

