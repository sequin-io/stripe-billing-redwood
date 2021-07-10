export const schema = gql`
  type BillingPortalConfiguration {
    id: String!
    active: Boolean
    application_id: String
    created: DateTime
    default_return_url: String
    is_default: Boolean
    livemode: Boolean
    object: String
    updated: DateTime
    features_customer_update: JSON
    features_invoice_history: JSON
    features_payment_method_update: JSON
    features_subscription_cancel: JSON
    features_subscription_pause: JSON
    features_subscription_update: JSON
    business_profile_headline: String
    business_profile_privacy_policy_url: String
    business_profile_terms_of_service_url: String
    application: Application
    billing_portal_session: [BillingPortalSession]!
  }

  type Query {
    billingPortalConfigurations: [BillingPortalConfiguration!]!
  }

  input CreateBillingPortalConfigurationInput {
    active: Boolean
    application_id: String
    created: DateTime
    default_return_url: String
    is_default: Boolean
    livemode: Boolean
    object: String
    updated: DateTime
    features_customer_update: JSON
    features_invoice_history: JSON
    features_payment_method_update: JSON
    features_subscription_cancel: JSON
    features_subscription_pause: JSON
    features_subscription_update: JSON
    business_profile_headline: String
    business_profile_privacy_policy_url: String
    business_profile_terms_of_service_url: String
  }

  input UpdateBillingPortalConfigurationInput {
    active: Boolean
    application_id: String
    created: DateTime
    default_return_url: String
    is_default: Boolean
    livemode: Boolean
    object: String
    updated: DateTime
    features_customer_update: JSON
    features_invoice_history: JSON
    features_payment_method_update: JSON
    features_subscription_cancel: JSON
    features_subscription_pause: JSON
    features_subscription_update: JSON
    business_profile_headline: String
    business_profile_privacy_policy_url: String
    business_profile_terms_of_service_url: String
  }
`
