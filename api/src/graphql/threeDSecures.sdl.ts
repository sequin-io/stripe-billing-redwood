export const schema = gql`
  type ThreeDSecure {
    id: String!
    amount: BigInt
    authenticated: Boolean
    card_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    redirect_url: String
    status: String
    card: Card
  }

  type Query {
    threeDSecures: [ThreeDSecure!]!
  }

  input CreateThreeDSecureInput {
    amount: BigInt
    authenticated: Boolean
    card_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    redirect_url: String
    status: String
  }

  input UpdateThreeDSecureInput {
    amount: BigInt
    authenticated: Boolean
    card_id: String
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    redirect_url: String
    status: String
  }
`
