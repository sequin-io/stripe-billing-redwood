export const schema = gql`
  type IssuingAuthorization {
    id: String!
    amount: BigInt
    approved: Boolean
    authorization_method: String
    card_id: String
    cardholder_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    merchant_amount: BigInt
    merchant_currency: String
    metadata: JSON
    object: String
    status: String
    wallet: String
    verification_data_address_line1_check: String
    verification_data_address_postal_code_check: String
    verification_data_cvc_check: String
    verification_data_expiry_check: String
    amount_details_atm_fee: BigInt
    request_history_amount: BigInt
    request_history_amount_details: JSON
    request_history_approved: Boolean
    request_history_created: DateTime
    request_history_currency: String
    request_history_merchant_amount: BigInt
    request_history_merchant_currency: String
    request_history_reason: String
    pending_request_amount: BigInt
    pending_request_amount_details: JSON
    pending_request_currency: String
    pending_request_is_amount_controllable: Boolean
    pending_request_merchant_amount: BigInt
    pending_request_merchant_currency: String
    merchant_data_category: String
    merchant_data_city: String
    merchant_data_country: String
    merchant_data_name: String
    merchant_data_network_id: String
    merchant_data_postal_code: String
    merchant_data_state: String
    issuing_card: IssuingCard
    issuing_cardholder: IssuingCardholder
    issuing_transaction: [IssuingTransaction]!
  }

  type Query {
    issuingAuthorizations: [IssuingAuthorization!]!
  }

  input CreateIssuingAuthorizationInput {
    amount: BigInt
    approved: Boolean
    authorization_method: String
    card_id: String
    cardholder_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    merchant_amount: BigInt
    merchant_currency: String
    metadata: JSON
    object: String
    status: String
    wallet: String
    verification_data_address_line1_check: String
    verification_data_address_postal_code_check: String
    verification_data_cvc_check: String
    verification_data_expiry_check: String
    amount_details_atm_fee: BigInt
    request_history_amount: BigInt
    request_history_amount_details: JSON
    request_history_approved: Boolean
    request_history_created: DateTime
    request_history_currency: String
    request_history_merchant_amount: BigInt
    request_history_merchant_currency: String
    request_history_reason: String
    pending_request_amount: BigInt
    pending_request_amount_details: JSON
    pending_request_currency: String
    pending_request_is_amount_controllable: Boolean
    pending_request_merchant_amount: BigInt
    pending_request_merchant_currency: String
    merchant_data_category: String
    merchant_data_city: String
    merchant_data_country: String
    merchant_data_name: String
    merchant_data_network_id: String
    merchant_data_postal_code: String
    merchant_data_state: String
  }

  input UpdateIssuingAuthorizationInput {
    amount: BigInt
    approved: Boolean
    authorization_method: String
    card_id: String
    cardholder_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    merchant_amount: BigInt
    merchant_currency: String
    metadata: JSON
    object: String
    status: String
    wallet: String
    verification_data_address_line1_check: String
    verification_data_address_postal_code_check: String
    verification_data_cvc_check: String
    verification_data_expiry_check: String
    amount_details_atm_fee: BigInt
    request_history_amount: BigInt
    request_history_amount_details: JSON
    request_history_approved: Boolean
    request_history_created: DateTime
    request_history_currency: String
    request_history_merchant_amount: BigInt
    request_history_merchant_currency: String
    request_history_reason: String
    pending_request_amount: BigInt
    pending_request_amount_details: JSON
    pending_request_currency: String
    pending_request_is_amount_controllable: Boolean
    pending_request_merchant_amount: BigInt
    pending_request_merchant_currency: String
    merchant_data_category: String
    merchant_data_city: String
    merchant_data_country: String
    merchant_data_name: String
    merchant_data_network_id: String
    merchant_data_postal_code: String
    merchant_data_state: String
  }
`
