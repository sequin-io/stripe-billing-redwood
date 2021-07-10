import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLScalarType, Kind } from 'graphql'

// This is to make Redwood parse our schemas without errors
const bigIntScalar = new GraphQLScalarType({
  name: 'BigInt',
  description: 'BigInt custom scalar type',
  serialize: (val) => val.toString(),
  parseValue: (val) => parseInt(val),
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10)
    }
    return null
  },
})

const decimalScalar = new GraphQLScalarType({
  name: 'Decimal',
  description: 'Decimal custom scalar type',
  serialize(value) {
    return value // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return value // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10) // Convert hard-coded AST string to integer and then to Date
    }
    return null // Invalid hard-coded value (not an integer)
  },
})

const typeDefs = gql`
  scalar BigInt
  scalar Decimal
`

const resolvers = {
  BigInt: bigIntScalar,
  Decimal: decimalScalar,
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
