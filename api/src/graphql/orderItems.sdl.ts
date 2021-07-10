export const schema = gql`
  type OrderItem {
    id: String!
    amount: BigInt
    currency: String
    description: String
    object: String
    parent_id: String
    quantity: BigInt
    type: String
    sku: Sku
  }

  type Query {
    orderItems: [OrderItem!]!
  }

  input CreateOrderItemInput {
    amount: BigInt
    currency: String
    description: String
    object: String
    parent_id: String
    quantity: BigInt
    type: String
  }

  input UpdateOrderItemInput {
    amount: BigInt
    currency: String
    description: String
    object: String
    parent_id: String
    quantity: BigInt
    type: String
  }
`
