export const schema = gql`
  type Sku {
    id: String!
    deleted: Boolean
    object: String
    active: Boolean
    attributes: JSON
    created: DateTime
    currency: String
    image: String
    livemode: Boolean
    metadata: JSON
    price: BigInt
    product_id: String
    updated: DateTime
    inventory_quantity: BigInt
    inventory_type: String
    inventory_value: String
    package_dimensions_height: Decimal
    package_dimensions_length: Decimal
    package_dimensions_weight: Decimal
    package_dimensions_width: Decimal
    product: Product
    order: [Order]!
    order_item: [OrderItem]!
    order_return: [OrderReturn]!
  }

  type Query {
    skus: [Sku!]!
  }

  input CreateSkuInput {
    deleted: Boolean
    object: String
    active: Boolean
    attributes: JSON
    created: DateTime
    currency: String
    image: String
    livemode: Boolean
    metadata: JSON
    price: BigInt
    product_id: String
    updated: DateTime
    inventory_quantity: BigInt
    inventory_type: String
    inventory_value: String
    package_dimensions_height: Decimal
    package_dimensions_length: Decimal
    package_dimensions_weight: Decimal
    package_dimensions_width: Decimal
  }

  input UpdateSkuInput {
    deleted: Boolean
    object: String
    active: Boolean
    attributes: JSON
    created: DateTime
    currency: String
    image: String
    livemode: Boolean
    metadata: JSON
    price: BigInt
    product_id: String
    updated: DateTime
    inventory_quantity: BigInt
    inventory_type: String
    inventory_value: String
    package_dimensions_height: Decimal
    package_dimensions_length: Decimal
    package_dimensions_weight: Decimal
    package_dimensions_width: Decimal
  }
`
