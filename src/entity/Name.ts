import {Column} from "typeorm";

export default class Name {

    @Column()
    firstName: string

    @Column()
    lastName: string

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

}