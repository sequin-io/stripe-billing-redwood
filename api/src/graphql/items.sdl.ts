export const schema = gql`
  type Item {
    id: String!
    amount_subtotal: BigInt
    amount_total: BigInt
    currency: String
    description: String
    object: String
    price_id: String
    quantity: BigInt
    taxes_amount: BigInt
    taxes_rate_id: String
    discounts_amount: BigInt
    discounts_discount_id: String
    discount: Discount
    price: Price
    tax_rate: TaxRate
  }

  type Query {
    items: [Item!]!
  }

  input CreateItemInput {
    amount_subtotal: BigInt
    amount_total: BigInt
    currency: String
    description: String
    object: String
    price_id: String
    quantity: BigInt
    taxes_amount: BigInt
    taxes_rate_id: String
    discounts_amount: BigInt
    discounts_discount_id: String
  }

  input UpdateItemInput {
    amount_subtotal: BigInt
    amount_total: BigInt
    currency: String
    description: String
    object: String
    price_id: String
    quantity: BigInt
    taxes_amount: BigInt
    taxes_rate_id: String
    discounts_amount: BigInt
    discounts_discount_id: String
  }
`
