export const schema = gql`
  type WebhookEndpoint {
    id: String!
    deleted: Boolean
    object: String
    api_version: String
    application_id: String
    created: DateTime
    description: String
    enabled_events: [String]!
    livemode: Boolean
    metadata: JSON
    secret: String
    status: String
    url: String
    application: Application
  }

  type Query {
    webhookEndpoints: [WebhookEndpoint!]!
  }

  input CreateWebhookEndpointInput {
    deleted: Boolean
    object: String
    api_version: String
    application_id: String
    created: DateTime
    description: String
    enabled_events: [String]!
    livemode: Boolean
    metadata: JSON
    secret: String
    status: String
    url: String
  }

  input UpdateWebhookEndpointInput {
    deleted: Boolean
    object: String
    api_version: String
    application_id: String
    created: DateTime
    description: String
    enabled_events: [String]!
    livemode: Boolean
    metadata: JSON
    secret: String
    status: String
    url: String
  }
`
