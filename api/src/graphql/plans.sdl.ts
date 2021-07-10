export const schema = gql`
  type Plan {
    id: String!
    deleted: Boolean
    object: String
    active: Boolean
    aggregate_usage: String
    amount: BigInt
    amount_decimal: Decimal
    billing_scheme: String
    created: DateTime
    currency: String
    interval: String
    interval_count: BigInt
    livemode: Boolean
    metadata: JSON
    nickname: String
    product_id: String
    tiers_mode: String
    trial_period_days: BigInt
    usage_type: String
    transform_usage_divide_by: BigInt
    transform_usage_round: String
    tiers_flat_amount: BigInt
    tiers_flat_amount_decimal: Decimal
    tiers_unit_amount: BigInt
    tiers_unit_amount_decimal: Decimal
    tiers_up_to: BigInt
    product: Product
    invoice_item: [InvoiceItem]!
    line_item: [LineItem]!
    subscription_item: [SubscriptionItem]!
  }

  type Query {
    plans: [Plan!]!
  }

  input CreatePlanInput {
    deleted: Boolean
    object: String
    active: Boolean
    aggregate_usage: String
    amount: BigInt
    amount_decimal: Decimal
    billing_scheme: String
    created: DateTime
    currency: String
    interval: String
    interval_count: BigInt
    livemode: Boolean
    metadata: JSON
    nickname: String
    product_id: String
    tiers_mode: String
    trial_period_days: BigInt
    usage_type: String
    transform_usage_divide_by: BigInt
    transform_usage_round: String
    tiers_flat_amount: BigInt
    tiers_flat_amount_decimal: Decimal
    tiers_unit_amount: BigInt
    tiers_unit_amount_decimal: Decimal
    tiers_up_to: BigInt
  }

  input UpdatePlanInput {
    deleted: Boolean
    object: String
    active: Boolean
    aggregate_usage: String
    amount: BigInt
    amount_decimal: Decimal
    billing_scheme: String
    created: DateTime
    currency: String
    interval: String
    interval_count: BigInt
    livemode: Boolean
    metadata: JSON
    nickname: String
    product_id: String
    tiers_mode: String
    trial_period_days: BigInt
    usage_type: String
    transform_usage_divide_by: BigInt
    transform_usage_round: String
    tiers_flat_amount: BigInt
    tiers_flat_amount_decimal: Decimal
    tiers_unit_amount: BigInt
    tiers_unit_amount_decimal: Decimal
    tiers_up_to: BigInt
  }
`
