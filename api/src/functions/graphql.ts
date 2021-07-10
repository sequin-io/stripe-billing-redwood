import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js,ts}'
import { db } from 'src/lib/db'
import services from 'src/services/**/*.{js,ts}'

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})

// Hacky way to serialize BigInt
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString()
}
