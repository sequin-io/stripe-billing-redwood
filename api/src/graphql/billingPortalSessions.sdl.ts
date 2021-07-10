export const schema = gql`
  type BillingPortalSession {
    id: String!
    configuration_id: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    object: String
    on_behalf_of: String
    return_url: String
    url: String
    billing_portal_configuration: BillingPortalConfiguration
    customer: Customer
  }

  type Query {
    billingPortalSessions: [BillingPortalSession!]!
  }

  input CreateBillingPortalSessionInput {
    configuration_id: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    object: String
    on_behalf_of: String
    return_url: String
    url: String
  }

  input UpdateBillingPortalSessionInput {
    configuration_id: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    object: String
    on_behalf_of: String
    return_url: String
    url: String
  }
`
