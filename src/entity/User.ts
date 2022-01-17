import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import Name from "./Name";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column(() => Name)
  name: Name

  @Column()
  password: string

  @CreateDateColumn()
  created: Date

  @UpdateDateColumn()
  updated: Date

  @DeleteDateColumn()
  deleted?: Date

}
