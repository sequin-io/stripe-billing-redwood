export const schema = gql`
  type CustomerBalanceTransaction {
    id: String!
    amount: BigInt
    created: DateTime
    credit_note_id: String
    currency: String
    customer_id: String
    description: String
    ending_balance: BigInt
    invoice_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    type: String
    credit_note_credit_noteTocustomer_balance_transaction_credit_note_id: CreditNote
    customer: Customer
    invoice: Invoice
    credit_note_credit_note_customer_balance_transaction_idTocustomer_balance_transaction: [CreditNote]!
  }

  type Query {
    customerBalanceTransactions: [CustomerBalanceTransaction!]!
  }

  input CreateCustomerBalanceTransactionInput {
    amount: BigInt
    created: DateTime
    credit_note_id: String
    currency: String
    customer_id: String
    description: String
    ending_balance: BigInt
    invoice_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    type: String
  }

  input UpdateCustomerBalanceTransactionInput {
    amount: BigInt
    created: DateTime
    credit_note_id: String
    currency: String
    customer_id: String
    description: String
    ending_balance: BigInt
    invoice_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    type: String
  }
`
