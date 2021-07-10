export const schema = gql`
  type SourceMandateNotification {
    id: String!
    amount: BigInt
    created: DateTime
    livemode: Boolean
    object: String
    reason: String
    source_id: String
    status: String
    type: String
    sepa_debit_creditor_identifier: String
    sepa_debit_last4: String
    sepa_debit_mandate_reference: String
    bacs_debit_last4: String
    acss_debit_statement_descriptor: String
    source: Source
  }

  type Query {
    sourceMandateNotifications: [SourceMandateNotification!]!
  }

  input CreateSourceMandateNotificationInput {
    amount: BigInt
    created: DateTime
    livemode: Boolean
    object: String
    reason: String
    source_id: String
    status: String
    type: String
    sepa_debit_creditor_identifier: String
    sepa_debit_last4: String
    sepa_debit_mandate_reference: String
    bacs_debit_last4: String
    acss_debit_statement_descriptor: String
  }

  input UpdateSourceMandateNotificationInput {
    amount: BigInt
    created: DateTime
    livemode: Boolean
    object: String
    reason: String
    source_id: String
    status: String
    type: String
    sepa_debit_creditor_identifier: String
    sepa_debit_last4: String
    sepa_debit_mandate_reference: String
    bacs_debit_last4: String
    acss_debit_statement_descriptor: String
  }
`
