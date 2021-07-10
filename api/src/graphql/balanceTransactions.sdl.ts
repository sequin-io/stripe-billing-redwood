export const schema = gql`
  type BalanceTransaction {
    id: String!
    amount: BigInt
    available_on: DateTime
    created: DateTime
    currency: String
    description: String
    exchange_rate: Decimal
    fee: BigInt
    net: BigInt
    object: String
    reporting_category: String
    status: String
    type: String
    fee_details_amount: BigInt
    fee_details_application: String
    fee_details_currency: String
    fee_details_description: String
    fee_details_type: String
    application_fee: [ApplicationFee]!
    charge: [Charge]!
    fee_refund: [FeeRefund]!
    issuing_transaction: [IssuingTransaction]!
    payout_balance_transactionTopayout_balance_transaction_id: [Payout]!
    payout_balance_transactionTopayout_failure_balance_transaction_id: [Payout]!
    refund_balance_transactionTorefund_balance_transaction_id: [Refund]!
    refund_balance_transactionTorefund_failure_balance_transaction_id: [Refund]!
    topup: [Topup]!
    transfer: [Transfer]!
    transfer_reversal: [TransferReversal]!
  }

  type Query {
    balanceTransactions: [BalanceTransaction!]!
  }

  input CreateBalanceTransactionInput {
    amount: BigInt
    available_on: DateTime
    created: DateTime
    currency: String
    description: String
    exchange_rate: Decimal
    fee: BigInt
    net: BigInt
    object: String
    reporting_category: String
    status: String
    type: String
    fee_details_amount: BigInt
    fee_details_application: String
    fee_details_currency: String
    fee_details_description: String
    fee_details_type: String
  }

  input UpdateBalanceTransactionInput {
    amount: BigInt
    available_on: DateTime
    created: DateTime
    currency: String
    description: String
    exchange_rate: Decimal
    fee: BigInt
    net: BigInt
    object: String
    reporting_category: String
    status: String
    type: String
    fee_details_amount: BigInt
    fee_details_application: String
    fee_details_currency: String
    fee_details_description: String
    fee_details_type: String
  }
`
