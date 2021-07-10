export const schema = gql`
  type IssuingDispute {
    id: String!
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    metadata: JSON
    object: String
    status: String
    transaction_id: String
    evidence_canceled: JSON
    evidence_duplicate: JSON
    evidence_fraudulent: JSON
    evidence_merchandise_not_as_described: JSON
    evidence_not_received: JSON
    evidence_other: JSON
    evidence_reason: String
    evidence_service_not_as_described: JSON
    issuing_transaction_issuing_dispute_transaction_idToissuing_transaction: IssuingTransaction
    issuing_transaction_issuing_disputeToissuing_transaction_dispute_id: [IssuingTransaction]!
  }

  type Query {
    issuingDisputes: [IssuingDispute!]!
  }

  input CreateIssuingDisputeInput {
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    metadata: JSON
    object: String
    status: String
    transaction_id: String
    evidence_canceled: JSON
    evidence_duplicate: JSON
    evidence_fraudulent: JSON
    evidence_merchandise_not_as_described: JSON
    evidence_not_received: JSON
    evidence_other: JSON
    evidence_reason: String
    evidence_service_not_as_described: JSON
  }

  input UpdateIssuingDisputeInput {
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    metadata: JSON
    object: String
    status: String
    transaction_id: String
    evidence_canceled: JSON
    evidence_duplicate: JSON
    evidence_fraudulent: JSON
    evidence_merchandise_not_as_described: JSON
    evidence_not_received: JSON
    evidence_other: JSON
    evidence_reason: String
    evidence_service_not_as_described: JSON
  }
`
