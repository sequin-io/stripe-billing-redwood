export const schema = gql`
  type ReserveTransaction {
    id: String!
    amount: BigInt
    currency: String
    description: String
    object: String
  }

  type Query {
    reserveTransactions: [ReserveTransaction!]!
  }

  input CreateReserveTransactionInput {
    amount: BigInt
    currency: String
    description: String
    object: String
  }

  input UpdateReserveTransactionInput {
    amount: BigInt
    currency: String
    description: String
    object: String
  }
`
