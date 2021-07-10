export const schema = gql`
  type ScheduledQueryRun {
    id: String!
    created: DateTime
    data_load_time: DateTime
    file_id: String
    livemode: Boolean
    object: String
    result_available_until: DateTime
    sql: String
    status: String
    title: String
    error_message: String
    file: File
  }

  type Query {
    scheduledQueryRuns: [ScheduledQueryRun!]!
  }

  input CreateScheduledQueryRunInput {
    created: DateTime
    data_load_time: DateTime
    file_id: String
    livemode: Boolean
    object: String
    result_available_until: DateTime
    sql: String
    status: String
    title: String
    error_message: String
  }

  input UpdateScheduledQueryRunInput {
    created: DateTime
    data_load_time: DateTime
    file_id: String
    livemode: Boolean
    object: String
    result_available_until: DateTime
    sql: String
    status: String
    title: String
    error_message: String
  }
`
