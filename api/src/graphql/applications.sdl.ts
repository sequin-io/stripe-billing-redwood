export const schema = gql`
  type Application {
    id: String!
    name: String
    object: String
    application_fee: [ApplicationFee]!
    billing_portal_configuration: [BillingPortalConfiguration]!
    charge: [Charge]!
    order: [Order]!
    payment_intent: [PaymentIntent]!
    setup_attempt: [SetupAttempt]!
    setup_intent: [SetupIntent]!
    webhook_endpoint: [WebhookEndpoint]!
  }

  type Query {
    applications: [Application!]!
  }

  input CreateApplicationInput {
    name: String
    object: String
  }

  input UpdateApplicationInput {
    name: String
    object: String
  }
`
