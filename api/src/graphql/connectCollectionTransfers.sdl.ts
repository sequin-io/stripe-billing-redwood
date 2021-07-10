export const schema = gql`
  type ConnectCollectionTransfer {
    id: String!
    amount: BigInt
    currency: String
    destination_id: String
    livemode: Boolean
    object: String
    account: Account
  }

  type Query {
    connectCollectionTransfers: [ConnectCollectionTransfer!]!
  }

  input CreateConnectCollectionTransferInput {
    amount: BigInt
    currency: String
    destination_id: String
    livemode: Boolean
    object: String
  }

  input UpdateConnectCollectionTransferInput {
    amount: BigInt
    currency: String
    destination_id: String
    livemode: Boolean
    object: String
  }
`
