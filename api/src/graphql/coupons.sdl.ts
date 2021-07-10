export const schema = gql`
  type Coupon {
    id: String!
    amount_off: BigInt
    created: DateTime
    currency: String
    duration: String
    duration_in_months: BigInt
    livemode: Boolean
    max_redemptions: BigInt
    metadata: JSON
    name: String
    object: String
    percent_off: Decimal
    redeem_by: DateTime
    times_redeemed: BigInt
    valid: Boolean
    deleted: Boolean
    applies_to_products: [String]!
    discount: [Discount]!
    promotion_code: [PromotionCode]!
    subscription_schedule: [SubscriptionSchedule]!
  }

  type Query {
    coupons: [Coupon!]!
  }

  input CreateCouponInput {
    amount_off: BigInt
    created: DateTime
    currency: String
    duration: String
    duration_in_months: BigInt
    livemode: Boolean
    max_redemptions: BigInt
    metadata: JSON
    name: String
    object: String
    percent_off: Decimal
    redeem_by: DateTime
    times_redeemed: BigInt
    valid: Boolean
    deleted: Boolean
    applies_to_products: [String]!
  }

  input UpdateCouponInput {
    amount_off: BigInt
    created: DateTime
    currency: String
    duration: String
    duration_in_months: BigInt
    livemode: Boolean
    max_redemptions: BigInt
    metadata: JSON
    name: String
    object: String
    percent_off: Decimal
    redeem_by: DateTime
    times_redeemed: BigInt
    valid: Boolean
    deleted: Boolean
    applies_to_products: [String]!
  }
`
