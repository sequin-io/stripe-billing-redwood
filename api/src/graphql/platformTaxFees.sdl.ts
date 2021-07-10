export const schema = gql`
  type PlatformTaxFee {
    id: String!
    account_id: String
    object: String
    source_transaction_id: String
    type: String
    account: Account
    source_transaction: SourceTransaction
  }

  type Query {
    platformTaxFees: [PlatformTaxFee!]!
  }

  input CreatePlatformTaxFeeInput {
    account_id: String
    object: String
    source_transaction_id: String
    type: String
  }

  input UpdatePlatformTaxFeeInput {
    account_id: String
    object: String
    source_transaction_id: String
    type: String
  }
`
