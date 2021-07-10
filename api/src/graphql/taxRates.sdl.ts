export const schema = gql`
  type TaxRate {
    id: String!
    active: Boolean
    country: String
    created: DateTime
    description: String
    display_name: String
    inclusive: Boolean
    jurisdiction: String
    livemode: Boolean
    metadata: JSON
    object: String
    percentage: Decimal
    state: String
    credit_note: [CreditNote]!
    credit_note_line_item: [CreditNoteLineItem]!
    invoice: [Invoice]!
    item: [Item]!
    line_item: [LineItem]!
  }

  type Query {
    taxRates: [TaxRate!]!
  }

  input CreateTaxRateInput {
    active: Boolean
    country: String
    created: DateTime
    description: String
    display_name: String
    inclusive: Boolean
    jurisdiction: String
    livemode: Boolean
    metadata: JSON
    object: String
    percentage: Decimal
    state: String
  }

  input UpdateTaxRateInput {
    active: Boolean
    country: String
    created: DateTime
    description: String
    display_name: String
    inclusive: Boolean
    jurisdiction: String
    livemode: Boolean
    metadata: JSON
    object: String
    percentage: Decimal
    state: String
  }
`
