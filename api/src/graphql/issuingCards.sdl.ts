export const schema = gql`
  type IssuingCard {
    id: String!
    brand: String
    cancellation_reason: String
    cardholder_id: String
    created: DateTime
    currency: String
    cvc: String
    exp_month: BigInt
    exp_year: BigInt
    last4: String
    livemode: Boolean
    metadata: JSON
    number: String
    object: String
    replaced_by_id: String
    replacement_for_id: String
    replacement_reason: String
    status: String
    type: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_eta: DateTime
    shipping_name: String
    shipping_service: String
    shipping_status: String
    shipping_tracking_number: String
    shipping_tracking_url: String
    shipping_type: String
    spending_controls_allowed_categories: [String]!
    spending_controls_blocked_categories: [String]!
    spending_controls_spending_limits: JSON
    spending_controls_spending_limits_currency: String
    issuing_cardholder: IssuingCardholder
    issuing_card_issuing_cardToissuing_card_replaced_by_id: IssuingCard
    issuing_card_issuing_cardToissuing_card_replacement_for_id: IssuingCard
    issuing_authorization: [IssuingAuthorization]!
    other_issuing_card_issuing_cardToissuing_card_replaced_by_id: [IssuingCard]!
    other_issuing_card_issuing_cardToissuing_card_replacement_for_id: [IssuingCard]!
    issuing_transaction: [IssuingTransaction]!
  }

  type Query {
    issuingCards: [IssuingCard!]!
  }

  input CreateIssuingCardInput {
    brand: String
    cancellation_reason: String
    cardholder_id: String
    created: DateTime
    currency: String
    cvc: String
    exp_month: BigInt
    exp_year: BigInt
    last4: String
    livemode: Boolean
    metadata: JSON
    number: String
    object: String
    replaced_by_id: String
    replacement_for_id: String
    replacement_reason: String
    status: String
    type: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_eta: DateTime
    shipping_name: String
    shipping_service: String
    shipping_status: String
    shipping_tracking_number: String
    shipping_tracking_url: String
    shipping_type: String
    spending_controls_allowed_categories: [String]!
    spending_controls_blocked_categories: [String]!
    spending_controls_spending_limits: JSON
    spending_controls_spending_limits_currency: String
  }

  input UpdateIssuingCardInput {
    brand: String
    cancellation_reason: String
    cardholder_id: String
    created: DateTime
    currency: String
    cvc: String
    exp_month: BigInt
    exp_year: BigInt
    last4: String
    livemode: Boolean
    metadata: JSON
    number: String
    object: String
    replaced_by_id: String
    replacement_for_id: String
    replacement_reason: String
    status: String
    type: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_eta: DateTime
    shipping_name: String
    shipping_service: String
    shipping_status: String
    shipping_tracking_number: String
    shipping_tracking_url: String
    shipping_type: String
    spending_controls_allowed_categories: [String]!
    spending_controls_blocked_categories: [String]!
    spending_controls_spending_limits: JSON
    spending_controls_spending_limits_currency: String
  }
`
