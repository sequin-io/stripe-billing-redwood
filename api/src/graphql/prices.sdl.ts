export const schema = gql`
  type Price {
    id: String!
    deleted: Boolean
    object: String
    active: Boolean
    billing_scheme: String
    created: DateTime
    currency: String
    livemode: Boolean
    lookup_key: String
    metadata: JSON
    nickname: String
    product_id: String
    tiers_mode: String
    type: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    transform_quantity_divide_by: BigInt
    transform_quantity_round: String
    recurring_aggregate_usage: String
    recurring_interval: String
    recurring_interval_count: BigInt
    recurring_trial_period_days: BigInt
    recurring_usage_type: String
    tiers_flat_amount: BigInt
    tiers_flat_amount_decimal: Decimal
    tiers_unit_amount: BigInt
    tiers_unit_amount_decimal: Decimal
    tiers_up_to: BigInt
    product: Product
    invoice_item: [InvoiceItem]!
    item: [Item]!
    line_item: [LineItem]!
    subscription_item: [SubscriptionItem]!
  }

  type Query {
    prices: [Price!]!
  }

  input CreatePriceInput {
    deleted: Boolean
    object: String
    active: Boolean
    billing_scheme: String
    created: DateTime
    currency: String
    livemode: Boolean
    lookup_key: String
    metadata: JSON
    nickname: String
    product_id: String
    tiers_mode: String
    type: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    transform_quantity_divide_by: BigInt
    transform_quantity_round: String
    recurring_aggregate_usage: String
    recurring_interval: String
    recurring_interval_count: BigInt
    recurring_trial_period_days: BigInt
    recurring_usage_type: String
    tiers_flat_amount: BigInt
    tiers_flat_amount_decimal: Decimal
    tiers_unit_amount: BigInt
    tiers_unit_amount_decimal: Decimal
    tiers_up_to: BigInt
  }

  input UpdatePriceInput {
    deleted: Boolean
    object: String
    active: Boolean
    billing_scheme: String
    created: DateTime
    currency: String
    livemode: Boolean
    lookup_key: String
    metadata: JSON
    nickname: String
    product_id: String
    tiers_mode: String
    type: String
    unit_amount: BigInt
    unit_amount_decimal: Decimal
    transform_quantity_divide_by: BigInt
    transform_quantity_round: String
    recurring_aggregate_usage: String
    recurring_interval: String
    recurring_interval_count: BigInt
    recurring_trial_period_days: BigInt
    recurring_usage_type: String
    tiers_flat_amount: BigInt
    tiers_flat_amount_decimal: Decimal
    tiers_unit_amount: BigInt
    tiers_unit_amount_decimal: Decimal
    tiers_up_to: BigInt
  }
`
