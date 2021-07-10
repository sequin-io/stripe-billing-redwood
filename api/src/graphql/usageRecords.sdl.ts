export const schema = gql`
  type UsageRecord {
    id: String!
    livemode: Boolean
    object: String
    quantity: BigInt
    subscription_item_id: String
    timestamp: DateTime
    subscription_item: SubscriptionItem
  }

  type Query {
    usageRecords: [UsageRecord!]!
  }

  input CreateUsageRecordInput {
    livemode: Boolean
    object: String
    quantity: BigInt
    subscription_item_id: String
    timestamp: DateTime
  }

  input UpdateUsageRecordInput {
    livemode: Boolean
    object: String
    quantity: BigInt
    subscription_item_id: String
    timestamp: DateTime
  }
`
