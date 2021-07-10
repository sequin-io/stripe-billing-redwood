export const schema = gql`
  type BitcoinReceiver {
    id: String!
    active: Boolean
    amount: BigInt
    amount_received: BigInt
    bitcoin_amount: BigInt
    bitcoin_amount_received: BigInt
    bitcoin_uri: String
    created: DateTime
    currency: String
    customer_id: String
    description: String
    email: String
    filled: Boolean
    inbound_address: String
    livemode: Boolean
    metadata: JSON
    object: String
    payment: String
    refund_address: String
    uncaptured_funds: Boolean
    used_for_payment: Boolean
    deleted: Boolean
    customer: Customer
    bitcoin_transaction: [BitcoinTransaction]!
  }

  type Query {
    bitcoinReceivers: [BitcoinReceiver!]!
  }

  input CreateBitcoinReceiverInput {
    active: Boolean
    amount: BigInt
    amount_received: BigInt
    bitcoin_amount: BigInt
    bitcoin_amount_received: BigInt
    bitcoin_uri: String
    created: DateTime
    currency: String
    customer_id: String
    description: String
    email: String
    filled: Boolean
    inbound_address: String
    livemode: Boolean
    metadata: JSON
    object: String
    payment: String
    refund_address: String
    uncaptured_funds: Boolean
    used_for_payment: Boolean
    deleted: Boolean
  }

  input UpdateBitcoinReceiverInput {
    active: Boolean
    amount: BigInt
    amount_received: BigInt
    bitcoin_amount: BigInt
    bitcoin_amount_received: BigInt
    bitcoin_uri: String
    created: DateTime
    currency: String
    customer_id: String
    description: String
    email: String
    filled: Boolean
    inbound_address: String
    livemode: Boolean
    metadata: JSON
    object: String
    payment: String
    refund_address: String
    uncaptured_funds: Boolean
    used_for_payment: Boolean
    deleted: Boolean
  }
`
