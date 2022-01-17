import {Handler} from "express";
import {getRepository} from "typeorm";
import {User} from "../entity/User";
import Name from "../entity/Name";

export const search: Handler = async (request, response) => {

    const userRepository = getRepository(User)
    const users = await userRepository.find()

    return response.json({
        users
    })
}

export const detail: Handler = async (request, response) => {

    const userRepository = getRepository(User)
    const user = await userRepository.findOneOrFail(request.params.id)

    return response.json({
        user
    })
}

export const create: Handler = async (request, response) => {

    const userRepository = getRepository(User)
    const user = new User()

    user.name = new Name(request.body.firstName, request.body.lastName)
    user.email = request.body.email
    user.password = request.body.password

    await userRepository.save(user)

    return response.json({
        user
    })
}

export const update: Handler = async (request, response) => {

    const userRepository = getRepository(User)
    const user = await userRepository.findOneOrFail(request.params.id)

    user.name = new Name(request.body.firstName, request.body.lastName)

    await userRepository.save(user)

    return response.json({
        user
    })
}

export const remove: Handler = async (request, response) => {

    const userRepository = getRepository(User)
    const user = await userRepository.findOneOrFail(request.params.id)

    await userRepository.softDelete(request.params.id)

    return response.json({
        user
    })
}

export const restore: Handler = async (request, response) => {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne(request.params.id)

    await userRepository.restore(request.params.id)

    return response.json({
        user
    })

}