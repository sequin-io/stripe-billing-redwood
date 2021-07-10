export const schema = gql`
  type LineItem {
    id: String!
    amount: BigInt
    currency: String
    description: String
    discountable: Boolean
    discounts: [String]!
    invoice_item: String
    livemode: Boolean
    metadata: JSON
    object: String
    plan_id: String
    price_id: String
    proration: Boolean
    quantity: BigInt
    subscription_id: String
    subscription_item_id: String
    type: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
    period_end: DateTime
    period_start: DateTime
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
    discount: Discount
    plan: Plan
    price: Price
    subscription: Subscription
    subscription_item: SubscriptionItem
    tax_rate: TaxRate
  }

  type Query {
    lineItems: [LineItem!]!
  }

  input CreateLineItemInput {
    amount: BigInt
    currency: String
    description: String
    discountable: Boolean
    discounts: [String]!
    invoice_item: String
    livemode: Boolean
    metadata: JSON
    object: String
    plan_id: String
    price_id: String
    proration: Boolean
    quantity: BigInt
    subscription_id: String
    subscription_item_id: String
    type: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
    period_end: DateTime
    period_start: DateTime
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
  }

  input UpdateLineItemInput {
    amount: BigInt
    currency: String
    description: String
    discountable: Boolean
    discounts: [String]!
    invoice_item: String
    livemode: Boolean
    metadata: JSON
    object: String
    plan_id: String
    price_id: String
    proration: Boolean
    quantity: BigInt
    subscription_id: String
    subscription_item_id: String
    type: String
    discount_amounts_amount: BigInt
    discount_amounts_discount_id: String
    period_end: DateTime
    period_start: DateTime
    tax_amounts_amount: BigInt
    tax_amounts_inclusive: Boolean
    tax_amounts_tax_rate_id: String
  }
`
