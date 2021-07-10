export const schema = gql`
  type Product {
    id: String!
    deleted: Boolean
    object: String
    active: Boolean
    attributes: [String]!
    caption: String
    created: DateTime
    deactivate_on: [String]!
    description: String
    images: [String]!
    livemode: Boolean
    metadata: JSON
    name: String
    shippable: Boolean
    statement_descriptor: String
    type: String
    unit_label: String
    updated: DateTime
    url: String
    package_dimensions_height: Decimal
    package_dimensions_length: Decimal
    package_dimensions_weight: Decimal
    package_dimensions_width: Decimal
    plan: [Plan]!
    price: [Price]!
    sku: [Sku]!
  }

  type Query {
    products: [Product!]!
  }

  input CreateProductInput {
    deleted: Boolean
    object: String
    active: Boolean
    attributes: [String]!
    caption: String
    created: DateTime
    deactivate_on: [String]!
    description: String
    images: [String]!
    livemode: Boolean
    metadata: JSON
    name: String
    shippable: Boolean
    statement_descriptor: String
    type: String
    unit_label: String
    updated: DateTime
    url: String
    package_dimensions_height: Decimal
    package_dimensions_length: Decimal
    package_dimensions_weight: Decimal
    package_dimensions_width: Decimal
  }

  input UpdateProductInput {
    deleted: Boolean
    object: String
    active: Boolean
    attributes: [String]!
    caption: String
    created: DateTime
    deactivate_on: [String]!
    description: String
    images: [String]!
    livemode: Boolean
    metadata: JSON
    name: String
    shippable: Boolean
    statement_descriptor: String
    type: String
    unit_label: String
    updated: DateTime
    url: String
    package_dimensions_height: Decimal
    package_dimensions_length: Decimal
    package_dimensions_weight: Decimal
    package_dimensions_width: Decimal
  }
`
