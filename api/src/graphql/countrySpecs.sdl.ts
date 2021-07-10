export const schema = gql`
  type CountrySpec {
    id: String!
    default_currency: String
    object: String
    supported_bank_account_currencies: JSON
    supported_payment_currencies: [String]!
    supported_payment_methods: [String]!
    supported_transfer_countries: [String]!
    verification_fields_company: JSON
    verification_fields_individual: JSON
  }

  type Query {
    countrySpecs: [CountrySpec!]!
  }

  input CreateCountrySpecInput {
    default_currency: String
    object: String
    supported_bank_account_currencies: JSON
    supported_payment_currencies: [String]!
    supported_payment_methods: [String]!
    supported_transfer_countries: [String]!
    verification_fields_company: JSON
    verification_fields_individual: JSON
  }

  input UpdateCountrySpecInput {
    default_currency: String
    object: String
    supported_bank_account_currencies: JSON
    supported_payment_currencies: [String]!
    supported_payment_methods: [String]!
    supported_transfer_countries: [String]!
    verification_fields_company: JSON
    verification_fields_individual: JSON
  }
`
