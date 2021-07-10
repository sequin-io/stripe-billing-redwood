export const schema = gql`
  type UsageRecordSummary {
    id: String!
    invoice_id: String
    livemode: Boolean
    object: String
    subscription_item_id: String
    total_usage: BigInt
    period_end: DateTime
    period_start: DateTime
    invoice: Invoice
    subscription_item: SubscriptionItem
  }

  type Query {
    usageRecordSummaries: [UsageRecordSummary!]!
  }

  input CreateUsageRecordSummaryInput {
    invoice_id: String
    livemode: Boolean
    object: String
    subscription_item_id: String
    total_usage: BigInt
    period_end: DateTime
    period_start: DateTime
  }

  input UpdateUsageRecordSummaryInput {
    invoice_id: String
    livemode: Boolean
    object: String
    subscription_item_id: String
    total_usage: BigInt
    period_end: DateTime
    period_start: DateTime
  }
`
