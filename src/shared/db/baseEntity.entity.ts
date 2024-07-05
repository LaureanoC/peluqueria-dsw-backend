import { PrimaryKey } from '@mikro-orm/core'

export abstract class BaseEntity {
  @PrimaryKey()
  id?: number

  @SerializedPrimaryKey()
  id?: string

  /*

  @Property({ type: DateTimeType })
  createdAt? = new Date()

  @Property({
    type: DateTimeType,
    onUpdate: () => new Date(),
  })
  updatedAt? = new Date()

  */
}