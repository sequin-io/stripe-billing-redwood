export const schema = gql`
  type TaxDeductedAtSource {
    id: String!
    object: String
    period_end: DateTime
    period_start: DateTime
    tax_deduction_account_number: String
  }

  type Query {
    taxDeductedAtSources: [TaxDeductedAtSource!]!
  }

  input CreateTaxDeductedAtSourceInput {
    object: String
    period_end: DateTime
    period_start: DateTime
    tax_deduction_account_number: String
  }

  input UpdateTaxDeductedAtSourceInput {
    object: String
    period_end: DateTime
    period_start: DateTime
    tax_deduction_account_number: String
  }
`
