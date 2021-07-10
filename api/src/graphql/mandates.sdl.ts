export const schema = gql`
  type Mandate {
    id: String!
    livemode: Boolean
    object: String
    payment_method_id: String
    status: String
    type: String
    customer_acceptance_accepted_at: DateTime
    customer_acceptance_offline: JSON
    customer_acceptance_online: JSON
    customer_acceptance_type: String
    single_use_amount: BigInt
    single_use_currency: String
    payment_method_details_acss_debit: JSON
    payment_method_details_au_becs_debit: JSON
    payment_method_details_bacs_debit: JSON
    payment_method_details_card: JSON
    payment_method_details_sepa_debit: JSON
    payment_method_details_type: String
    payment_method: PaymentMethod
    setup_intent_mandateTosetup_intent_mandate_id: [SetupIntent]!
    setup_intent_mandateTosetup_intent_single_use_mandate_id: [SetupIntent]!
  }

  type Query {
    mandates: [Mandate!]!
  }

  input CreateMandateInput {
    livemode: Boolean
    object: String
    payment_method_id: String
    status: String
    type: String
    customer_acceptance_accepted_at: DateTime
    customer_acceptance_offline: JSON
    customer_acceptance_online: JSON
    customer_acceptance_type: String
    single_use_amount: BigInt
    single_use_currency: String
    payment_method_details_acss_debit: JSON
    payment_method_details_au_becs_debit: JSON
    payment_method_details_bacs_debit: JSON
    payment_method_details_card: JSON
    payment_method_details_sepa_debit: JSON
    payment_method_details_type: String
  }

  input UpdateMandateInput {
    livemode: Boolean
    object: String
    payment_method_id: String
    status: String
    type: String
    customer_acceptance_accepted_at: DateTime
    customer_acceptance_offline: JSON
    customer_acceptance_online: JSON
    customer_acceptance_type: String
    single_use_amount: BigInt
    single_use_currency: String
    payment_method_details_acss_debit: JSON
    payment_method_details_au_becs_debit: JSON
    payment_method_details_bacs_debit: JSON
    payment_method_details_card: JSON
    payment_method_details_sepa_debit: JSON
    payment_method_details_type: String
  }
`
