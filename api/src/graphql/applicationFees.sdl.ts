export const schema = gql`
  type ApplicationFee {
    id: String!
    account_id: String
    amount: BigInt
    amount_refunded: BigInt
    application_id: String
    balance_transaction_id: String
    charge_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    originating_transaction_id: String
    refunded: Boolean
    account: Account
    application: Application
    balance_transaction: BalanceTransaction
    charge_application_fee_charge_idTocharge: Charge
    charge_application_fee_originating_transaction_idTocharge: Charge
    charge_application_feeTocharge_application_fee_id: [Charge]!
    fee_refund: [FeeRefund]!
  }

  type Query {
    applicationFees: [ApplicationFee!]!
  }

  input CreateApplicationFeeInput {
    account_id: String
    amount: BigInt
    amount_refunded: BigInt
    application_id: String
    balance_transaction_id: String
    charge_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    originating_transaction_id: String
    refunded: Boolean
  }

  input UpdateApplicationFeeInput {
    account_id: String
    amount: BigInt
    amount_refunded: BigInt
    application_id: String
    balance_transaction_id: String
    charge_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    originating_transaction_id: String
    refunded: Boolean
  }
`
