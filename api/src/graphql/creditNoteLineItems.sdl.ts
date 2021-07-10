export const schema = gql`
  type CreditNoteLineItem {
    id: String!
    amount: BigInt
    description: String
    discount_amount: BigInt
    invoice_line_item: String
    livemode: Boolean
    object: String
    quantity: BigInt
    type: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
    discount: Discount
    invoice_item: InvoiceItem
    tax_rate: TaxRate
  }

  type Query {
    creditNoteLineItems: [CreditNoteLineItem!]!
  }

  input CreateCreditNoteLineItemInput {
    amount: BigInt
    description: String
    discount_amount: BigInt
    invoice_line_item: String
    livemode: Boolean
    object: String
    quantity: BigInt
    type: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
  }

  input UpdateCreditNoteLineItemInput {
    amount: BigInt
    description: String
    discount_amount: BigInt
    invoice_line_item: String
    livemode: Boolean
    object: String
    quantity: BigInt
    type: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
  }
`
