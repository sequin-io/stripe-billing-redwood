export const schema = gql`
  type Event {
    id: String!
    account_id: String
    api_version: String
    created: DateTime
    livemode: Boolean
    object: String
    pending_webhooks: BigInt
    type: String
    data_object: JSON
    data_previous_attributes: JSON
    account: Account
  }

  type Query {
    events: [Event!]!
  }

  input CreateEventInput {
    account_id: String
    api_version: String
    created: DateTime
    livemode: Boolean
    object: String
    pending_webhooks: BigInt
    type: String
    data_object: JSON
    data_previous_attributes: JSON
  }

  input UpdateEventInput {
    account_id: String
    api_version: String
    created: DateTime
    livemode: Boolean
    object: String
    pending_webhooks: BigInt
    type: String
    data_object: JSON
    data_previous_attributes: JSON
  }
`
