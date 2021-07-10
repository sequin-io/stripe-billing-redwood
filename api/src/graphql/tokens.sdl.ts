export const schema = gql`
  type Token {
    id: String!
    bank_account_id: String
    card_id: String
    client_ip: String
    created: DateTime
    livemode: Boolean
    object: String
    type: String
    used: Boolean
    bank_account: BankAccount
    card: Card
  }

  type Query {
    tokens: [Token!]!
  }

  input CreateTokenInput {
    bank_account_id: String
    card_id: String
    client_ip: String
    created: DateTime
    livemode: Boolean
    object: String
    type: String
    used: Boolean
  }

  input UpdateTokenInput {
    bank_account_id: String
    card_id: String
    client_ip: String
    created: DateTime
    livemode: Boolean
    object: String
    type: String
    used: Boolean
  }
`
