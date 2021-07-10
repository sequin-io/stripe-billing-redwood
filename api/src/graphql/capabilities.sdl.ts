export const schema = gql`
  type Capability {
    id: String!
    account_id: String
    object: String
    requested: Boolean
    requested_at: DateTime
    status: String
    requirements_current_deadline: DateTime
    requirements_currently_due: [String]!
    requirements_disabled_reason: String
    requirements_errors: JSON
    requirements_eventually_due: [String]!
    requirements_past_due: [String]!
    requirements_pending_verification: [String]!
    account: Account
  }

  type Query {
    capabilities: [Capability!]!
  }

  input CreateCapabilityInput {
    account_id: String
    object: String
    requested: Boolean
    requested_at: DateTime
    status: String
    requirements_current_deadline: DateTime
    requirements_currently_due: [String]!
    requirements_disabled_reason: String
    requirements_errors: JSON
    requirements_eventually_due: [String]!
    requirements_past_due: [String]!
    requirements_pending_verification: [String]!
  }

  input UpdateCapabilityInput {
    account_id: String
    object: String
    requested: Boolean
    requested_at: DateTime
    status: String
    requirements_current_deadline: DateTime
    requirements_currently_due: [String]!
    requirements_disabled_reason: String
    requirements_errors: JSON
    requirements_eventually_due: [String]!
    requirements_past_due: [String]!
    requirements_pending_verification: [String]!
  }
`
