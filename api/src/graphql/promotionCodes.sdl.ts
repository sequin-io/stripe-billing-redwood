export const schema = gql`
  type PromotionCode {
    id: String!
    active: Boolean
    code: String
    coupon_id: String
    created: DateTime
    customer_id: String
    expires_at: DateTime
    livemode: Boolean
    max_redemptions: BigInt
    metadata: JSON
    object: String
    times_redeemed: BigInt
    restrictions_first_time_transaction: Boolean
    restrictions_minimum_amount: BigInt
    restrictions_minimum_amount_currency: String
    coupon: Coupon
    customer: Customer
    discount: [Discount]!
  }

  type Query {
    promotionCodes: [PromotionCode!]!
  }

  input CreatePromotionCodeInput {
    active: Boolean
    code: String
    coupon_id: String
    created: DateTime
    customer_id: String
    expires_at: DateTime
    livemode: Boolean
    max_redemptions: BigInt
    metadata: JSON
    object: String
    times_redeemed: BigInt
    restrictions_first_time_transaction: Boolean
    restrictions_minimum_amount: BigInt
    restrictions_minimum_amount_currency: String
  }

  input UpdatePromotionCodeInput {
    active: Boolean
    code: String
    coupon_id: String
    created: DateTime
    customer_id: String
    expires_at: DateTime
    livemode: Boolean
    max_redemptions: BigInt
    metadata: JSON
    object: String
    times_redeemed: BigInt
    restrictions_first_time_transaction: Boolean
    restrictions_minimum_amount: BigInt
    restrictions_minimum_amount_currency: String
  }
`
