export const schema = gql`
  type Order {
    id: String!
    amount: BigInt
    amount_returned: BigInt
    application_id: String
    application_fee: BigInt
    charge_id: String
    created: DateTime
    currency: String
    customer_id: String
    email: String
    external_coupon_code: String
    livemode: Boolean
    metadata: JSON
    object: String
    selected_shipping_method: String
    status: String
    updated: DateTime
    upstream_id: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    items_amount: BigInt
    items_currency: String
    items_description: String
    items_object: String
    items_parent_id: String
    items_quantity: BigInt
    items_type: String
    status_transitions_canceled: DateTime
    status_transitions_fulfiled: DateTime
    status_transitions_paid: DateTime
    status_transitions_returned: DateTime
    application: Application
    charge_chargeToorder_charge_id: Charge
    customer: Customer
    sku: Sku
    charge_charge_order_idToorder: [Charge]!
    order_return: [OrderReturn]!
  }

  type Query {
    orders: [Order!]!
  }

  input CreateOrderInput {
    amount: BigInt
    amount_returned: BigInt
    application_id: String
    application_fee: BigInt
    charge_id: String
    created: DateTime
    currency: String
    customer_id: String
    email: String
    external_coupon_code: String
    livemode: Boolean
    metadata: JSON
    object: String
    selected_shipping_method: String
    status: String
    updated: DateTime
    upstream_id: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    items_amount: BigInt
    items_currency: String
    items_description: String
    items_object: String
    items_parent_id: String
    items_quantity: BigInt
    items_type: String
    status_transitions_canceled: DateTime
    status_transitions_fulfiled: DateTime
    status_transitions_paid: DateTime
    status_transitions_returned: DateTime
  }

  input UpdateOrderInput {
    amount: BigInt
    amount_returned: BigInt
    application_id: String
    application_fee: BigInt
    charge_id: String
    created: DateTime
    currency: String
    customer_id: String
    email: String
    external_coupon_code: String
    livemode: Boolean
    metadata: JSON
    object: String
    selected_shipping_method: String
    status: String
    updated: DateTime
    upstream_id: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    items_amount: BigInt
    items_currency: String
    items_description: String
    items_object: String
    items_parent_id: String
    items_quantity: BigInt
    items_type: String
    status_transitions_canceled: DateTime
    status_transitions_fulfiled: DateTime
    status_transitions_paid: DateTime
    status_transitions_returned: DateTime
  }
`
