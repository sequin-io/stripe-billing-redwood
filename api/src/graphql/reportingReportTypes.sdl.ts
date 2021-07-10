export const schema = gql`
  type ReportingReportType {
    id: String!
    data_available_end: DateTime
    data_available_start: DateTime
    default_columns: [String]!
    name: String
    object: String
    updated: DateTime
    version: BigInt
    reporting_report_run: [ReportingReportRun]!
  }

  type Query {
    reportingReportTypes: [ReportingReportType!]!
  }

  input CreateReportingReportTypeInput {
    data_available_end: DateTime
    data_available_start: DateTime
    default_columns: [String]!
    name: String
    object: String
    updated: DateTime
    version: BigInt
  }

  input UpdateReportingReportTypeInput {
    data_available_end: DateTime
    data_available_start: DateTime
    default_columns: [String]!
    name: String
    object: String
    updated: DateTime
    version: BigInt
  }
`
