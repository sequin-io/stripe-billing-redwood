export const schema = gql`
  type ReportingReportRun {
    id: String!
    created: DateTime
    error: String
    livemode: Boolean
    object: String
    report_type: String
    result_id: String
    status: String
    succeeded_at: DateTime
    parameters_columns: [String]!
    parameters_connected_account: String
    parameters_currency: String
    parameters_interval_end: DateTime
    parameters_interval_start: DateTime
    parameters_payout: String
    parameters_reporting_category: String
    parameters_timezone: String
    reporting_report_type: ReportingReportType
    file: File
  }

  type Query {
    reportingReportRuns: [ReportingReportRun!]!
  }

  input CreateReportingReportRunInput {
    created: DateTime
    error: String
    livemode: Boolean
    object: String
    report_type: String
    result_id: String
    status: String
    succeeded_at: DateTime
    parameters_columns: [String]!
    parameters_connected_account: String
    parameters_currency: String
    parameters_interval_end: DateTime
    parameters_interval_start: DateTime
    parameters_payout: String
    parameters_reporting_category: String
    parameters_timezone: String
  }

  input UpdateReportingReportRunInput {
    created: DateTime
    error: String
    livemode: Boolean
    object: String
    report_type: String
    result_id: String
    status: String
    succeeded_at: DateTime
    parameters_columns: [String]!
    parameters_connected_account: String
    parameters_currency: String
    parameters_interval_end: DateTime
    parameters_interval_start: DateTime
    parameters_payout: String
    parameters_reporting_category: String
    parameters_timezone: String
  }
`
