export const schema = gql`
  type TaxId {
    id: String!
    deleted: Boolean
    object: String
    country: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    type: String
    value: String
    verification_status: String
    verification_verified_address: String
    verification_verified_name: String
    customer: Customer
  }

  type Query {
    taxIds: [TaxId!]!
  }

  input CreateTaxIdInput {
    deleted: Boolean
    object: String
    country: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    type: String
    value: String
    verification_status: String
    verification_verified_address: String
    verification_verified_name: String
  }

  input UpdateTaxIdInput {
    deleted: Boolean
    object: String
    country: String
    created: DateTime
    customer_id: String
    livemode: Boolean
    type: String
    value: String
    verification_status: String
    verification_verified_address: String
    verification_verified_name: String
  }
`
