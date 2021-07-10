export const schema = gql`
  type TerminalReader {
    id: String!
    deleted: Boolean
    object: String
    device_sw_version: String
    device_type: String
    ip_address: String
    label: String
    livemode: Boolean
    location: String
    metadata: JSON
    serial_number: String
    status: String
    terminal_location: TerminalLocation
  }

  type Query {
    terminalReaders: [TerminalReader!]!
  }

  input CreateTerminalReaderInput {
    deleted: Boolean
    object: String
    device_sw_version: String
    device_type: String
    ip_address: String
    label: String
    livemode: Boolean
    location: String
    metadata: JSON
    serial_number: String
    status: String
  }

  input UpdateTerminalReaderInput {
    deleted: Boolean
    object: String
    device_sw_version: String
    device_type: String
    ip_address: String
    label: String
    livemode: Boolean
    location: String
    metadata: JSON
    serial_number: String
    status: String
  }
`
