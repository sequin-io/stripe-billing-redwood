export const schema = gql`
  type Recipient {
    id: String!
    deleted: Boolean
    object: String
    active_account_id: String
    created: DateTime
    default_card_id: String
    description: String
    email: String
    livemode: Boolean
    metadata: JSON
    migrated_to_id: String
    name: String
    rolled_back_from_id: String
    type: String
    verified: Boolean
    bank_account: BankAccount
    card_cardTorecipient_default_card_id: Card
    account_accountTorecipient_migrated_to_id: Account
    account_accountTorecipient_rolled_back_from_id: Account
    card_card_recipient_idTorecipient: [Card]!
  }

  type Query {
    recipients: [Recipient!]!
  }

  input CreateRecipientInput {
    deleted: Boolean
    object: String
    active_account_id: String
    created: DateTime
    default_card_id: String
    description: String
    email: String
    livemode: Boolean
    metadata: JSON
    migrated_to_id: String
    name: String
    rolled_back_from_id: String
    type: String
    verified: Boolean
  }

  input UpdateRecipientInput {
    deleted: Boolean
    object: String
    active_account_id: String
    created: DateTime
    default_card_id: String
    description: String
    email: String
    livemode: Boolean
    metadata: JSON
    migrated_to_id: String
    name: String
    rolled_back_from_id: String
    type: String
    verified: Boolean
  }
`
