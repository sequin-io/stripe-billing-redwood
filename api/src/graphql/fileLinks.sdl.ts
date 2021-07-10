export const schema = gql`
  type FileLink {
    id: String!
    created: DateTime
    expired: Boolean
    expires_at: DateTime
    file_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    url: String
    file: File
  }

  type Query {
    fileLinks: [FileLink!]!
  }

  input CreateFileLinkInput {
    created: DateTime
    expired: Boolean
    expires_at: DateTime
    file_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    url: String
  }

  input UpdateFileLinkInput {
    created: DateTime
    expired: Boolean
    expires_at: DateTime
    file_id: String
    livemode: Boolean
    metadata: JSON
    object: String
    url: String
  }
`
