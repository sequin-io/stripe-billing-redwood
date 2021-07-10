export const schema = gql`
  type CreditNote {
    id: String!
    amount: BigInt
    created: DateTime
    currency: String
    customer_id: String
    customer_balance_transaction_id: String
    discount_amount: BigInt
    invoice_id: String
    livemode: Boolean
    memo: String
    metadata: JSON
    number: String
    object: String
    out_of_band_amount: BigInt
    pdf: String
    reason: String
    refund_id: String
    status: String
    subtotal: BigInt
    total: BigInt
    type: String
    voided_at: DateTime
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
    customer_balance_transaction_credit_note_customer_balance_transaction_idTocustomer_balance_transaction: CustomerBalanceTransaction
    customer: Customer
    discount: Discount
    invoice: Invoice
    refund: Refund
    tax_rate: TaxRate
    customer_balance_transaction_credit_noteTocustomer_balance_transaction_credit_note_id: [CustomerBalanceTransaction]!
  }

  type Query {
    creditNotes: [CreditNote!]!
  }

  input CreateCreditNoteInput {
    amount: BigInt
    created: DateTime
    currency: String
    customer_id: String
    customer_balance_transaction_id: String
    discount_amount: BigInt
    invoice_id: String
    livemode: Boolean
    memo: String
    metadata: JSON
    number: String
    object: String
    out_of_band_amount: BigInt
    pdf: String
    reason: String
    refund_id: String
    status: String
    subtotal: BigInt
    total: BigInt
    type: String
    voided_at: DateTime
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
  }

  input UpdateCreditNoteInput {
    amount: BigInt
    created: DateTime
    currency: String
    customer_id: String
    customer_balance_transaction_id: String
    discount_amount: BigInt
    invoice_id: String
    livemode: Boolean
    memo: String
    metadata: JSON
    number: String
    object: String
    out_of_band_amount: BigInt
    pdf: String
    reason: String
    refund_id: String
    status: String
    subtotal: BigInt
    total: BigInt
    type: String
    voided_at: DateTime
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
  }
`
