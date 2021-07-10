export const schema = gql`
  type TerminalLocation {
    id: String!
    deleted: Boolean
    object: String
    display_name: String
    livemode: Boolean
    metadata: JSON
    address_city: String
    address_country: String
    address_line1: String
    address_line2: String
    address_postal_code: String
    address_state: String
    terminal_reader: [TerminalReader]!
  }

  type Query {
    terminalLocations: [TerminalLocation!]!
  }

  input CreateTerminalLocationInput {
    deleted: Boolean
    object: String
    display_name: String
    livemode: Boolean
    metadata: JSON
    address_city: String
    address_country: String
    address_line1: String
    address_line2: String
    address_postal_code: String
    address_state: String
  }

  input UpdateTerminalLocationInput {
    deleted: Boolean
    object: String
    display_name: String
    livemode: Boolean
    metadata: JSON
    address_city: String
    address_country: String
    address_line1: String
    address_line2: String
    address_postal_code: String
    address_state: String
  }
`
