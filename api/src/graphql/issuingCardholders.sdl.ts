export const schema = gql`
  type IssuingCardholder {
    id: String!
    created: DateTime
    email: String
    livemode: Boolean
    metadata: JSON
    name: String
    object: String
    phone_number: String
    status: String
    type: String
    billing_address: JSON
    requirements_disabled_reason: String
    requirements_past_due: [String]!
    spending_controls_allowed_categories: [String]!
    spending_controls_blocked_categories: [String]!
    spending_controls_spending_limits: JSON
    spending_controls_spending_limits_currency: String
    individual_dob: JSON
    individual_first_name: String
    individual_last_name: String
    individual_verification: JSON
    company_tax_id_provided: Boolean
    issuing_authorization: [IssuingAuthorization]!
    issuing_card: [IssuingCard]!
    issuing_transaction: [IssuingTransaction]!
  }

  type Query {
    issuingCardholders: [IssuingCardholder!]!
  }

  input CreateIssuingCardholderInput {
    created: DateTime
    email: String
    livemode: Boolean
    metadata: JSON
    name: String
    object: String
    phone_number: String
    status: String
    type: String
    billing_address: JSON
    requirements_disabled_reason: String
    requirements_past_due: [String]!
    spending_controls_allowed_categories: [String]!
    spending_controls_blocked_categories: [String]!
    spending_controls_spending_limits: JSON
    spending_controls_spending_limits_currency: String
    individual_dob: JSON
    individual_first_name: String
    individual_last_name: String
    individual_verification: JSON
    company_tax_id_provided: Boolean
  }

  input UpdateIssuingCardholderInput {
    created: DateTime
    email: String
    livemode: Boolean
    metadata: JSON
    name: String
    object: String
    phone_number: String
    status: String
    type: String
    billing_address: JSON
    requirements_disabled_reason: String
    requirements_past_due: [String]!
    spending_controls_allowed_categories: [String]!
    spending_controls_blocked_categories: [String]!
    spending_controls_spending_limits: JSON
    spending_controls_spending_limits_currency: String
    individual_dob: JSON
    individual_first_name: String
    individual_last_name: String
    individual_verification: JSON
    company_tax_id_provided: Boolean
  }
`
