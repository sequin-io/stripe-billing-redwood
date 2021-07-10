export const schema = gql`
  type FeeRefund {
    id: String!
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    fee_id: String
    metadata: JSON
    object: String
    balance_transaction: BalanceTransaction
    application_fee: ApplicationFee
  }

  type Query {
    feeRefunds: [FeeRefund!]!
  }

  input CreateFeeRefundInput {
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    fee_id: String
    metadata: JSON
    object: String
  }

  input UpdateFeeRefundInput {
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    fee_id: String
    metadata: JSON
    object: String
  }
`
