export const schema = gql`
  type Refund {
    id: String!
    amount: BigInt
    balance_transaction_id: String
    charge_id: String
    created: DateTime
    currency: String
    description: String
    failure_balance_transaction_id: String
    failure_reason: String
    metadata: JSON
    object: String
    payment_intent_id: String
    reason: String
    receipt_number: String
    source_transfer_reversal_id: String
    status: String
    transfer_reversal_id: String
    balance_transaction_balance_transactionTorefund_balance_transaction_id: BalanceTransaction
    charge: Charge
    balance_transaction_balance_transactionTorefund_failure_balance_transaction_id: BalanceTransaction
    payment_intent: PaymentIntent
    transfer_reversal_refund_source_transfer_reversal_idTotransfer_reversal: TransferReversal
    transfer_reversal_refund_transfer_reversal_idTotransfer_reversal: TransferReversal
    credit_note: [CreditNote]!
    order_return: [OrderReturn]!
    transfer_reversal_refundTotransfer_reversal_destination_payment_refund_id: [TransferReversal]!
    transfer_reversal_refundTotransfer_reversal_source_refund_id: [TransferReversal]!
  }

  type Query {
    refunds: [Refund!]!
  }

  input CreateRefundInput {
    amount: BigInt
    balance_transaction_id: String
    charge_id: String
    created: DateTime
    currency: String
    description: String
    failure_balance_transaction_id: String
    failure_reason: String
    metadata: JSON
    object: String
    payment_intent_id: String
    reason: String
    receipt_number: String
    source_transfer_reversal_id: String
    status: String
    transfer_reversal_id: String
  }

  input UpdateRefundInput {
    amount: BigInt
    balance_transaction_id: String
    charge_id: String
    created: DateTime
    currency: String
    description: String
    failure_balance_transaction_id: String
    failure_reason: String
    metadata: JSON
    object: String
    payment_intent_id: String
    reason: String
    receipt_number: String
    source_transfer_reversal_id: String
    status: String
    transfer_reversal_id: String
  }
`
