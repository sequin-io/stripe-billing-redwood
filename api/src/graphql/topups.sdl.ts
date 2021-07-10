export const schema = gql`
  type Topup {
    id: String!
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    expected_availability_date: BigInt
    failure_code: String
    failure_message: String
    livemode: Boolean
    metadata: JSON
    object: String
    source_id: String
    statement_descriptor: String
    status: String
    transfer_group: String
    balance_transaction: BalanceTransaction
    source: Source
  }

  type Query {
    topups: [Topup!]!
  }

  input CreateTopupInput {
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    expected_availability_date: BigInt
    failure_code: String
    failure_message: String
    livemode: Boolean
    metadata: JSON
    object: String
    source_id: String
    statement_descriptor: String
    status: String
    transfer_group: String
  }

  input UpdateTopupInput {
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    expected_availability_date: BigInt
    failure_code: String
    failure_message: String
    livemode: Boolean
    metadata: JSON
    object: String
    source_id: String
    statement_descriptor: String
    status: String
    transfer_group: String
  }
`
