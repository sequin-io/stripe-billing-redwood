export const schema = gql`
  type Card {
    id: String!
    account_id: String
    address_city: String
    address_country: String
    address_line1: String
    address_line1_check: String
    address_line2: String
    address_state: String
    address_zip: String
    address_zip_check: String
    available_payout_methods: [String]!
    brand: String
    country: String
    currency: String
    customer_id: String
    cvc_check: String
    default_for_currency: Boolean
    description: String
    dynamic_last4: String
    exp_month: BigInt
    exp_year: BigInt
    fingerprint: String
    funding: String
    iin: String
    issuer: String
    last4: String
    metadata: JSON
    name: String
    object: String
    recipient_id: String
    tokenization_method: String
    deleted: Boolean
    account: Account
    customer: Customer
    recipient_card_recipient_idTorecipient: Recipient
    recipient_cardTorecipient_default_card_id: [Recipient]!
    three_d_secure: [ThreeDSecure]!
    token: [Token]!
  }

  type Query {
    cards: [Card!]!
  }

  input CreateCardInput {
    account_id: String
    address_city: String
    address_country: String
    address_line1: String
    address_line1_check: String
    address_line2: String
    address_state: String
    address_zip: String
    address_zip_check: String
    available_payout_methods: [String]!
    brand: String
    country: String
    currency: String
    customer_id: String
    cvc_check: String
    default_for_currency: Boolean
    description: String
    dynamic_last4: String
    exp_month: BigInt
    exp_year: BigInt
    fingerprint: String
    funding: String
    iin: String
    issuer: String
    last4: String
    metadata: JSON
    name: String
    object: String
    recipient_id: String
    tokenization_method: String
    deleted: Boolean
  }

  input UpdateCardInput {
    account_id: String
    address_city: String
    address_country: String
    address_line1: String
    address_line1_check: String
    address_line2: String
    address_state: String
    address_zip: String
    address_zip_check: String
    available_payout_methods: [String]!
    brand: String
    country: String
    currency: String
    customer_id: String
    cvc_check: String
    default_for_currency: Boolean
    description: String
    dynamic_last4: String
    exp_month: BigInt
    exp_year: BigInt
    fingerprint: String
    funding: String
    iin: String
    issuer: String
    last4: String
    metadata: JSON
    name: String
    object: String
    recipient_id: String
    tokenization_method: String
    deleted: Boolean
  }
`
