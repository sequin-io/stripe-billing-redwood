export const schema = gql`
  type OrderReturn {
    id: String!
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    order_id: String
    refund_id: String
    items_amount: BigInt
    items_currency: String
    items_description: String
    items_object: String
    items_parent_id: String
    items_quantity: BigInt
    items_type: String
    sku: Sku
    order: Order
    refund: Refund
  }

  type Query {
    orderReturns: [OrderReturn!]!
  }

  input CreateOrderReturnInput {
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    order_id: String
    refund_id: String
    items_amount: BigInt
    items_currency: String
    items_description: String
    items_object: String
    items_parent_id: String
    items_quantity: BigInt
    items_type: String
  }

  input UpdateOrderReturnInput {
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    order_id: String
    refund_id: String
    items_amount: BigInt
    items_currency: String
    items_description: String
    items_object: String
    items_parent_id: String
    items_quantity: BigInt
    items_type: String
  }
`
