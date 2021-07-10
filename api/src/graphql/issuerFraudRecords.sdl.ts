export const schema = gql`
  type IssuerFraudRecord {
    id: String!
    actionable: Boolean
    charge_id: String
    created: DateTime
    fraud_type: String
    has_liability_shift: Boolean
    livemode: Boolean
    object: String
    post_date: BigInt
    charge: Charge
  }

  type Query {
    issuerFraudRecords: [IssuerFraudRecord!]!
  }

  input CreateIssuerFraudRecordInput {
    actionable: Boolean
    charge_id: String
    created: DateTime
    fraud_type: String
    has_liability_shift: Boolean
    livemode: Boolean
    object: String
    post_date: BigInt
  }

  input UpdateIssuerFraudRecordInput {
    actionable: Boolean
    charge_id: String
    created: DateTime
    fraud_type: String
    has_liability_shift: Boolean
    livemode: Boolean
    object: String
    post_date: BigInt
  }
`
