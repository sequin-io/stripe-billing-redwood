export const schema = gql`
  type BankAccount {
    id: String!
    account_id: String
    account_holder_name: String
    account_holder_type: String
    available_payout_methods: [String]!
    bank_name: String
    country: String
    currency: String
    customer_id: String
    default_for_currency: Boolean
    fingerprint: String
    last4: String
    metadata: JSON
    object: String
    routing_number: String
    status: String
    deleted: Boolean
    account: Account
    customer: Customer
    recipient: [Recipient]!
    token: [Token]!
  }

  type Query {
    bankAccounts: [BankAccount!]!
  }

  input CreateBankAccountInput {
    account_id: String
    account_holder_name: String
    account_holder_type: String
    available_payout_methods: [String]!
    bank_name: String
    country: String
    currency: String
    customer_id: String
    default_for_currency: Boolean
    fingerprint: String
    last4: String
    metadata: JSON
    object: String
    routing_number: String
    status: String
    deleted: Boolean
  }

  input UpdateBankAccountInput {
    account_id: String
    account_holder_name: String
    account_holder_type: String
    available_payout_methods: [String]!
    bank_name: String
    country: String
    currency: String
    customer_id: String
    default_for_currency: Boolean
    fingerprint: String
    last4: String
    metadata: JSON
    object: String
    routing_number: String
    status: String
    deleted: Boolean
  }
`
