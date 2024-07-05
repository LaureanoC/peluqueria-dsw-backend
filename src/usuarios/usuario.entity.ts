import {
  Entity,
  Property,
  ManyToMany,
  Cascade,
  ManyToOne,
  Rel,
  Collection,
} from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

@Entity()
export class Usuario extends BaseEntity {
  @Property({ nullable: false })
  dni!: number

  @Property({ nullable: false })
  nombre!: string

  @Property({ nullable: false })
  mail!: string

  @Property({ nullable: false })
  contraseña!: string

  @Property({ nullable: false })
  telefono!: number

}