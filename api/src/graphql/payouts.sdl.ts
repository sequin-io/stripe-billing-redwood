export const schema = gql`
  type Payout {
    id: String!
    amount: BigInt
    arrival_date: DateTime
    automatic: Boolean
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    failure_balance_transaction_id: String
    failure_code: String
    failure_message: String
    livemode: Boolean
    metadata: JSON
    method: String
    object: String
    original_payout_id: String
    reversed_by_id: String
    source_type: String
    statement_descriptor: String
    status: String
    type: String
    balance_transaction_balance_transactionTopayout_balance_transaction_id: BalanceTransaction
    balance_transaction_balance_transactionTopayout_failure_balance_transaction_id: BalanceTransaction
    payout_payoutTopayout_original_payout_id: Payout
    payout_payoutTopayout_reversed_by_id: Payout
    other_payout_payoutTopayout_original_payout_id: [Payout]!
    other_payout_payoutTopayout_reversed_by_id: [Payout]!
  }

  type Query {
    payouts: [Payout!]!
  }

  input CreatePayoutInput {
    amount: BigInt
    arrival_date: DateTime
    automatic: Boolean
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    failure_balance_transaction_id: String
    failure_code: String
    failure_message: String
    livemode: Boolean
    metadata: JSON
    method: String
    object: String
    original_payout_id: String
    reversed_by_id: String
    source_type: String
    statement_descriptor: String
    status: String
    type: String
  }

  input UpdatePayoutInput {
    amount: BigInt
    arrival_date: DateTime
    automatic: Boolean
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    failure_balance_transaction_id: String
    failure_code: String
    failure_message: String
    livemode: Boolean
    metadata: JSON
    method: String
    object: String
    original_payout_id: String
    reversed_by_id: String
    source_type: String
    statement_descriptor: String
    status: String
    type: String
  }
`
