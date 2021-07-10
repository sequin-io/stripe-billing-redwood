export const schema = gql`
  type Transfer {
    id: String!
    amount: BigInt
    amount_reversed: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    destination_id: String
    destination_payment_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    reversed: Boolean
    source_transaction_id: String
    source_type: String
    transfer_group: String
    balance_transaction: BalanceTransaction
    account: Account
    charge_chargeTotransfer_destination_payment_id: Charge
    charge_chargeTotransfer_source_transaction_id: Charge
    charge_charge_source_transfer_idTotransfer: [Charge]!
    charge_charge_transfer_idTotransfer: [Charge]!
    transfer_reversal: [TransferReversal]!
  }

  type Query {
    transfers: [Transfer!]!
  }

  input CreateTransferInput {
    amount: BigInt
    amount_reversed: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    destination_id: String
    destination_payment_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    reversed: Boolean
    source_transaction_id: String
    source_type: String
    transfer_group: String
  }

  input UpdateTransferInput {
    amount: BigInt
    amount_reversed: BigInt
    balance_transaction_id: String
    created: DateTime
    currency: String
    description: String
    destination_id: String
    destination_payment_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    reversed: Boolean
    source_transaction_id: String
    source_type: String
    transfer_group: String
  }
`
