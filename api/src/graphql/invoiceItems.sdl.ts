export const schema = gql`
  type InvoiceItem {
    id: String!
    deleted: Boolean
    object: String
    amount: BigInt
    currency: String
    customer_id: String
    date: DateTime
    description: String
    discountable: Boolean
    discounts: [String]!
    invoice_id: String
    livemode: Boolean
    metadata: JSON
    plan_id: String
    price_id: String
    proration: Boolean
    quantity: BigInt
    subscription_id: String
    subscription_item_id: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    period_end: DateTime
    period_start: DateTime
    customer: Customer
    invoice: Invoice
    plan: Plan
    price: Price
    subscription: Subscription
    subscription_item: SubscriptionItem
    credit_note_line_item: [CreditNoteLineItem]!
  }

  type Query {
    invoiceItems: [InvoiceItem!]!
  }

  input CreateInvoiceItemInput {
    deleted: Boolean
    object: String
    amount: BigInt
    currency: String
    customer_id: String
    date: DateTime
    description: String
    discountable: Boolean
    discounts: [String]!
    invoice_id: String
    livemode: Boolean
    metadata: JSON
    plan_id: String
    price_id: String
    proration: Boolean
    quantity: BigInt
    subscription_id: String
    subscription_item_id: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    period_end: DateTime
    period_start: DateTime
  }

  input UpdateInvoiceItemInput {
    deleted: Boolean
    object: String
    amount: BigInt
    currency: String
    customer_id: String
    date: DateTime
    description: String
    discountable: Boolean
    discounts: [String]!
    invoice_id: String
    livemode: Boolean
    metadata: JSON
    plan_id: String
    price_id: String
    proration: Boolean
    quantity: BigInt
    subscription_id: String
    subscription_item_id: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    period_end: DateTime
    period_start: DateTime
  }
`
