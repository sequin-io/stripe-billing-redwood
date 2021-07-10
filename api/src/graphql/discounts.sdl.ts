export const schema = gql`
  type Discount {
    id: String!
    checkout_session: String
    coupon_id: String
    customer_id: String
    deleted: Boolean
    invoice_id: String
    invoice_item: String
    object: String
    promotion_code_id: String
    start: DateTime
    subscription_id: String
    end: DateTime
    coupon: Coupon
    customer_customerTodiscount_customer_id: Customer
    invoice_discount_invoice_idToinvoice: Invoice
    promotion_code: PromotionCode
    subscription_discount_subscription_idTosubscription: Subscription
    credit_note: [CreditNote]!
    credit_note_line_item: [CreditNoteLineItem]!
    customer_customer_discount_idTodiscount: [Customer]!
    invoice_discountToinvoice_discount_id: [Invoice]!
    invoice_discountToinvoice_total_discount_amounts_discount_id: [Invoice]!
    item: [Item]!
    line_item: [LineItem]!
    subscription_discountTosubscription_discount_id: [Subscription]!
  }

  type Query {
    discounts: [Discount!]!
  }

  input CreateDiscountInput {
    checkout_session: String
    coupon_id: String
    customer_id: String
    deleted: Boolean
    invoice_id: String
    invoice_item: String
    object: String
    promotion_code_id: String
    start: DateTime
    subscription_id: String
    end: DateTime
  }

  input UpdateDiscountInput {
    checkout_session: String
    coupon_id: String
    customer_id: String
    deleted: Boolean
    invoice_id: String
    invoice_item: String
    object: String
    promotion_code_id: String
    start: DateTime
    subscription_id: String
    end: DateTime
  }
`
