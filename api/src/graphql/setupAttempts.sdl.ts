export const schema = gql`
  type SetupAttempt {
    id: String!
    application_id: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    object: String
    on_behalf_of_id: String
    payment_method_id: String
    setup_intent_id: String
    status: String
    usage: String
    setup_error_charge: String
    setup_error_code: String
    setup_error_decline_code: String
    setup_error_doc_url: String
    setup_error_message: String
    setup_error_param: String
    setup_error_payment_intent_id: String
    setup_error_payment_method_id: String
    setup_error_payment_method_type: String
    setup_error_setup_intent_id: String
    setup_error_source: JSON
    setup_error_type: String
    payment_method_details_acss_debit: JSON
    payment_method_details_au_becs_debit: JSON
    payment_method_details_bacs_debit: JSON
    payment_method_details_bancontact: JSON
    payment_method_details_card: JSON
    payment_method_details_card_present: JSON
    payment_method_details_ideal: JSON
    payment_method_details_sepa_debit: JSON
    payment_method_details_sofort: JSON
    payment_method_details_type: String
    application: Application
    customer: Customer
    account: Account
    payment_method_payment_methodTosetup_attempt_payment_method_id: PaymentMethod
    payment_intent: PaymentIntent
    payment_method_payment_methodTosetup_attempt_setup_error_payment_method_id: PaymentMethod
    setup_intent_setup_attempt_setup_error_setup_intent_idTosetup_intent: SetupIntent
    setup_intent_setup_attempt_setup_intent_idTosetup_intent: SetupIntent
    setup_intent_setup_attemptTosetup_intent_latest_attempt_id: [SetupIntent]!
  }

  type Query {
    setupAttempts: [SetupAttempt!]!
  }

  input CreateSetupAttemptInput {
    application_id: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    object: String
    on_behalf_of_id: String
    payment_method_id: String
    setup_intent_id: String
    status: String
    usage: String
    setup_error_charge: String
    setup_error_code: String
    setup_error_decline_code: String
    setup_error_doc_url: String
    setup_error_message: String
    setup_error_param: String
    setup_error_payment_intent_id: String
    setup_error_payment_method_id: String
    setup_error_payment_method_type: String
    setup_error_setup_intent_id: String
    setup_error_source: JSON
    setup_error_type: String
    payment_method_details_acss_debit: JSON
    payment_method_details_au_becs_debit: JSON
    payment_method_details_bacs_debit: JSON
    payment_method_details_bancontact: JSON
    payment_method_details_card: JSON
    payment_method_details_card_present: JSON
    payment_method_details_ideal: JSON
    payment_method_details_sepa_debit: JSON
    payment_method_details_sofort: JSON
    payment_method_details_type: String
  }

  input UpdateSetupAttemptInput {
    application_id: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    object: String
    on_behalf_of_id: String
    payment_method_id: String
    setup_intent_id: String
    status: String
    usage: String
    setup_error_charge: String
    setup_error_code: String
    setup_error_decline_code: String
    setup_error_doc_url: String
    setup_error_message: String
    setup_error_param: String
    setup_error_payment_intent_id: String
    setup_error_payment_method_id: String
    setup_error_payment_method_type: String
    setup_error_setup_intent_id: String
    setup_error_source: JSON
    setup_error_type: String
    payment_method_details_acss_debit: JSON
    payment_method_details_au_becs_debit: JSON
    payment_method_details_bacs_debit: JSON
    payment_method_details_bancontact: JSON
    payment_method_details_card: JSON
    payment_method_details_card_present: JSON
    payment_method_details_ideal: JSON
    payment_method_details_sepa_debit: JSON
    payment_method_details_sofort: JSON
    payment_method_details_type: String
  }
`
