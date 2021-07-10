export const schema = gql`
  type IssuingTransaction {
    id: String!
    amount: BigInt
    authorization_id: String
    balance_transaction_id: String
    card_id: String
    cardholder_id: String
    created: DateTime
    currency: String
    dispute_id: String
    livemode: Boolean
    merchant_amount: BigInt
    merchant_currency: String
    metadata: JSON
    object: String
    type: String
    amount_details_atm_fee: BigInt
    purchase_details_flight: JSON
    purchase_details_fuel: JSON
    purchase_details_lodging: JSON
    purchase_details_receipt: JSON
    purchase_details_reference: String
    merchant_data_category: String
    merchant_data_city: String
    merchant_data_country: String
    merchant_data_name: String
    merchant_data_network_id: String
    merchant_data_postal_code: String
    merchant_data_state: String
    issuing_authorization: IssuingAuthorization
    balance_transaction: BalanceTransaction
    issuing_card: IssuingCard
    issuing_cardholder: IssuingCardholder
    issuing_dispute_issuing_disputeToissuing_transaction_dispute_id: IssuingDispute
    issuing_dispute_issuing_dispute_transaction_idToissuing_transaction: [IssuingDispute]!
  }

  type Query {
    issuingTransactions: [IssuingTransaction!]!
  }

  input CreateIssuingTransactionInput {
    amount: BigInt
    authorization_id: String
    balance_transaction_id: String
    card_id: String
    cardholder_id: String
    created: DateTime
    currency: String
    dispute_id: String
    livemode: Boolean
    merchant_amount: BigInt
    merchant_currency: String
    metadata: JSON
    object: String
    type: String
    amount_details_atm_fee: BigInt
    purchase_details_flight: JSON
    purchase_details_fuel: JSON
    purchase_details_lodging: JSON
    purchase_details_receipt: JSON
    purchase_details_reference: String
    merchant_data_category: String
    merchant_data_city: String
    merchant_data_country: String
    merchant_data_name: String
    merchant_data_network_id: String
    merchant_data_postal_code: String
    merchant_data_state: String
  }

  input UpdateIssuingTransactionInput {
    amount: BigInt
    authorization_id: String
    balance_transaction_id: String
    card_id: String
    cardholder_id: String
    created: DateTime
    currency: String
    dispute_id: String
    livemode: Boolean
    merchant_amount: BigInt
    merchant_currency: String
    metadata: JSON
    object: String
    type: String
    amount_details_atm_fee: BigInt
    purchase_details_flight: JSON
    purchase_details_fuel: JSON
    purchase_details_lodging: JSON
    purchase_details_receipt: JSON
    purchase_details_reference: String
    merchant_data_category: String
    merchant_data_city: String
    merchant_data_country: String
    merchant_data_name: String
    merchant_data_network_id: String
    merchant_data_postal_code: String
    merchant_data_state: String
  }
`
