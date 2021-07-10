export const schema = gql`
  type File {
    id: String!
    created: DateTime
    expires_at: DateTime
    filename: String
    object: String
    purpose: String
    size: BigInt
    title: String
    type: String
    url: String
    dispute_dispute_evidence_cancellation_policy_idTofile: [Dispute]!
    dispute_dispute_evidence_customer_communication_idTofile: [Dispute]!
    dispute_dispute_evidence_customer_signature_idTofile: [Dispute]!
    dispute_dispute_evidence_duplicate_charge_documentation_idTofile: [Dispute]!
    dispute_dispute_evidence_receipt_idTofile: [Dispute]!
    dispute_dispute_evidence_refund_policy_idTofile: [Dispute]!
    dispute_dispute_evidence_service_documentation_idTofile: [Dispute]!
    dispute_dispute_evidence_shipping_documentation_idTofile: [Dispute]!
    dispute_dispute_evidence_uncategorized_file_idTofile: [Dispute]!
    file_link: [FileLink]!
    reporting_report_run: [ReportingReportRun]!
    scheduled_query_run: [ScheduledQueryRun]!
  }

  type Query {
    files: [File!]!
  }

  input CreateFileInput {
    created: DateTime
    expires_at: DateTime
    filename: String
    object: String
    purpose: String
    size: BigInt
    title: String
    type: String
    url: String
  }

  input UpdateFileInput {
    created: DateTime
    expires_at: DateTime
    filename: String
    object: String
    purpose: String
    size: BigInt
    title: String
    type: String
    url: String
  }
`
