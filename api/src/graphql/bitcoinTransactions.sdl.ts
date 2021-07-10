export const schema = gql`
  type BitcoinTransaction {
    id: String!
    amount: BigInt
    bitcoin_amount: BigInt
    created: DateTime
    currency: String
    object: String
    receiver: String
    bitcoin_receiver: BitcoinReceiver
  }

  type Query {
    bitcoinTransactions: [BitcoinTransaction!]!
  }

  input CreateBitcoinTransactionInput {
    amount: BigInt
    bitcoin_amount: BigInt
    created: DateTime
    currency: String
    object: String
    receiver: String
  }

  input UpdateBitcoinTransactionInput {
    amount: BigInt
    bitcoin_amount: BigInt
    created: DateTime
    currency: String
    object: String
    receiver: String
  }
`
