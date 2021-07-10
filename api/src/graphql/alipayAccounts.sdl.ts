export const schema = gql`
  type AlipayAccount {
    id: String!
    created: DateTime
    customer_id: String
    fingerprint: String
    livemode: Boolean
    metadata: JSON
    object: String
    payment_amount: BigInt
    payment_currency: String
    reusable: Boolean
    used: Boolean
    username: String
    deleted: Boolean
    customer: Customer
  }

  type Query {
    alipayAccounts: [AlipayAccount!]!
  }

  input CreateAlipayAccountInput {
    created: DateTime
    customer_id: String
    fingerprint: String
    livemode: Boolean
    metadata: JSON
    object: String
    payment_amount: BigInt
    payment_currency: String
    reusable: Boolean
    used: Boolean
    username: String
    deleted: Boolean
  }

  input UpdateAlipayAccountInput {
    created: DateTime
    customer_id: String
    fingerprint: String
    livemode: Boolean
    metadata: JSON
    object: String
    payment_amount: BigInt
    payment_currency: String
    reusable: Boolean
    used: Boolean
    username: String
    deleted: Boolean
  }
`
