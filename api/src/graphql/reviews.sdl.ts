export const schema = gql`
  type Review {
    id: String!
    billing_zip: String
    charge_id: String
    closed_reason: String
    created: DateTime
    ip_address: String
    livemode: Boolean
    object: String
    open: Boolean
    opened_reason: String
    payment_intent_id: String
    reason: String
    ip_address_location_city: String
    ip_address_location_country: String
    ip_address_location_latitude: Decimal
    ip_address_location_longitude: Decimal
    ip_address_location_region: String
    session_browser: String
    session_device: String
    session_platform: String
    session_version: String
    charge_chargeToreview_charge_id: Charge
    payment_intent_payment_intentToreview_payment_intent_id: PaymentIntent
    charge_charge_review_idToreview: [Charge]!
    payment_intent_payment_intent_review_idToreview: [PaymentIntent]!
  }

  type Query {
    reviews: [Review!]!
  }

  input CreateReviewInput {
    billing_zip: String
    charge_id: String
    closed_reason: String
    created: DateTime
    ip_address: String
    livemode: Boolean
    object: String
    open: Boolean
    opened_reason: String
    payment_intent_id: String
    reason: String
    ip_address_location_city: String
    ip_address_location_country: String
    ip_address_location_latitude: Decimal
    ip_address_location_longitude: Decimal
    ip_address_location_region: String
    session_browser: String
    session_device: String
    session_platform: String
    session_version: String
  }

  input UpdateReviewInput {
    billing_zip: String
    charge_id: String
    closed_reason: String
    created: DateTime
    ip_address: String
    livemode: Boolean
    object: String
    open: Boolean
    opened_reason: String
    payment_intent_id: String
    reason: String
    ip_address_location_city: String
    ip_address_location_country: String
    ip_address_location_latitude: Decimal
    ip_address_location_longitude: Decimal
    ip_address_location_region: String
    session_browser: String
    session_device: String
    session_platform: String
    session_version: String
  }
`
