export const schema = gql`
  type SubscriptionItem {
    id: String!
    deleted: Boolean
    object: String
    created: DateTime
    metadata: JSON
    plan_id: String
    price_id: String
    quantity: BigInt
    subscription_id: String
    billing_thresholds_usage_gte: BigInt
    plan: Plan
    price: Price
    subscription: Subscription
    invoice_item: [InvoiceItem]!
    line_item: [LineItem]!
    usage_record: [UsageRecord]!
    usage_record_summary: [UsageRecordSummary]!
  }

  type Query {
    subscriptionItems: [SubscriptionItem!]!
  }

  input CreateSubscriptionItemInput {
    deleted: Boolean
    object: String
    created: DateTime
    metadata: JSON
    plan_id: String
    price_id: String
    quantity: BigInt
    subscription_id: String
    billing_thresholds_usage_gte: BigInt
  }

  input UpdateSubscriptionItemInput {
    deleted: Boolean
    object: String
    created: DateTime
    metadata: JSON
    plan_id: String
    price_id: String
    quantity: BigInt
    subscription_id: String
    billing_thresholds_usage_gte: BigInt
  }
`
