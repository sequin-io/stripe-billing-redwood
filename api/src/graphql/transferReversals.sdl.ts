export const schema = gql`
  type TransferReversal {
    id: String!
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    destination_payment_refund_id: String
    metadata: JSON
    object: String
    source_refund_id: String
    transfer_id: String
    balance_transaction: BalanceTransaction
    refund_refundTotransfer_reversal_destination_payment_refund_id: Refund
    refund_refundTotransfer_reversal_source_refund_id: Refund
    transfer: Transfer
    refund_refund_source_transfer_reversal_idTotransfer_reversal: [Refund]!
    refund_refund_transfer_reversal_idTotransfer_reversal: [Refund]!
  }

  type Query {
    transferReversals: [TransferReversal!]!
  }

  input CreateTransferReversalInput {
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    destination_payment_refund_id: String
    metadata: JSON
    object: String
    source_refund_id: String
    transfer_id: String
  }

  input UpdateTransferReversalInput {
    amount: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    destination_payment_refund_id: String
    metadata: JSON
    object: String
    source_refund_id: String
    transfer_id: String
  }
`
